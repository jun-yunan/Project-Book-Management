import cloudinary from '../../config/cloudinaryConfig';
import { Response, Request } from 'express';
import BookSchema from '../models/BookSchema';
import AuthorSchema from '../models/AuthorSchema';
import PublishingCompanySchema from '../models/PublishingCompanySchema';

class BookController {
    async addBook(req: Request, res: Response) {
        try {
            const { name, author, numberPage, price, publishingCompany, publishingDate, summary } =
                JSON.parse(req.body.data);

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

            const bookModel = new BookSchema({
                name,
                image,
                price,
                summary,
                numberPage,
                publishingDate,
            }).save();

            const authorModel = new AuthorSchema({ name: author }).save();
            const publishingCompanyModel = new PublishingCompanySchema({ name: publishingCompany });

            res.status(201).json({
                message: 'successfully!!!',
                body: JSON.parse(req.body.data),
                bookModel,
                authorModel,
                publishingCompanyModel,
            });
        } catch (error) {
            console.log(error);

            return res.status(500).json({ error: error.message });
        }
    }
}

export default new BookController();
