import cloudinary from '../../config/cloudinaryConfig';
import { Response, Request, NextFunction } from 'express';
import BookSchema from '../models/BookSchema';
import AuthorSchema from '../models/AuthorSchema';
import PublishingCompanySchema from '../models/PublishingCompanySchema';
import LanguageSchema from '../models/LanguageSchema';
import BookCategorySchema from '../models/BookCategorySchema';
import SpecializedSchema from '../models/SpecializedSchema';

class BookController {
    async addBook(req: Request, res: Response) {
        try {
            const {
                name,
                author,
                numberPage,
                price,
                publishingCompany,
                publishingDate,
                summary,
                bookCategory,
                language,
                specialized,
            } = JSON.parse(req.body.data);

            const uploadImage = await cloudinary.v2.uploader.upload(
                req.file.path,
                {
                    folder: 'books',
                },
                (error, result) => {
                    if (error) {
                        return res.status(500).json({ error, message: 'upload image fail!!!' });
                    }
                },
            );

            const { url: image } = uploadImage;

            const [authorModel, publishingCompanyModel, bookCategoryModel, languageModel, specializedModel] =
                await Promise.all([
                    AuthorSchema.findOne({ name: author })
                        .exec()
                        .then((result) => (result ? result : AuthorSchema.create({ name: author }))),
                    PublishingCompanySchema.findOne({ name: publishingCompany })
                        .exec()
                        .then((result) =>
                            result ? result : PublishingCompanySchema.create({ name: publishingCompany }),
                        ),
                    BookCategorySchema.findOne({ name: bookCategory })
                        .exec()
                        .then((result) =>
                            result ? result : BookCategorySchema.create({ name: bookCategory }),
                        ),
                    LanguageSchema.findOne({ name: language })
                        .exec()
                        .then((result) => (result ? result : LanguageSchema.create({ name: language }))),

                    SpecializedSchema.findOne({ name: specialized })
                        .exec()
                        .then((result) =>
                            result ? result : SpecializedSchema.create({ name: specialized }),
                        ),
                ]);

            if (
                !authorModel ||
                !publishingCompanyModel ||
                !bookCategoryModel ||
                !languageModel ||
                !specializedModel
            ) {
                return res.status(403).json({ message: 'Tạo thất bại' });
            }
            const { _id: authorId } = authorModel;
            const { _id: publishingCompanyId } = publishingCompanyModel;
            const { _id: languageId } = languageModel;
            const { _id: specializedId } = specializedModel;
            const { _id: bookCategoryId } = bookCategoryModel;

            const bookData = await BookSchema.create({
                name,
                image,
                price,
                numberPage,
                publishingDate,
                summary,
                authorId,
                publishingCompanyId,
                bookCategoryId,
                languageId,
                specializedId,
            });

            const { _id: bookId } = bookData;

            const [
                authorCollection,
                publishingCompanyCollection,
                languageCollection,
                specializedCollection,
                bookCategoryCollection,
            ] = await Promise.all([
                !authorModel.bookId.includes(bookId) &&
                    AuthorSchema.updateOne({ _id: authorId }, { $push: { bookId } }),
                !publishingCompanyModel.bookId.includes(bookId) &&
                    PublishingCompanySchema.updateOne({ _id: publishingCompanyId }, { $push: { bookId } }),

                !languageModel.bookId.includes(bookId) &&
                    LanguageSchema.updateOne({ _id: languageId }, { $push: { bookId } }),
                !specializedModel.bookId.includes(bookId) &&
                    SpecializedSchema.updateOne({ _id: specializedId }, { $push: { bookId } }),
                !bookCategoryModel.bookId.includes(bookId) &&
                    BookCategorySchema.updateOne({ _id: bookCategoryId }, { $push: { bookId } }),
            ]);

            if (
                !authorCollection ||
                !publishingCompanyCollection ||
                !languageCollection ||
                !specializedCollection ||
                !bookCategoryCollection
            ) {
                return res.status(403).json({ message: 'Lưu thất bại' });
            }
            return res
                .status(201)
                .json({
                    message: 'successfully!!!',
                    body: JSON.parse(req.body.data),
                    bookData,
                    authorModel,
                    publishingCompanyModel,
                })
                .end();
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.message }).end();
        }
    }

    async getBooks(req: Request, res: Response, next: NextFunction) {
        try {
            const books = await BookSchema.find()
                .select('name image price summary publishingDate')
                .populate('authorId', 'name')
                .populate('publishingCompanyId', 'name')
                .populate('bookCategoryId', 'name')
                .populate('languageId', 'name')
                .lean()
                .exec()
                .catch((error) => res.status(404).json({ error, message: 'Not found books' }).end());

            return res.status(200).json({ message: 'Get books successfully', books }).end();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default new BookController();
