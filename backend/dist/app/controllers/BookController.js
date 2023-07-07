"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinaryConfig_1 = __importDefault(require("../../config/cloudinaryConfig"));
const BookSchema_1 = __importDefault(require("../models/BookSchema"));
const AuthorSchema_1 = __importDefault(require("../models/AuthorSchema"));
const PublishingCompanySchema_1 = __importDefault(require("../models/PublishingCompanySchema"));
class BookController {
    addBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, author, numberPage, price, publishingCompany, publishingDate, summary } = JSON.parse(req.body.data);
                const uploadImage = yield cloudinaryConfig_1.default.v2.uploader.upload(req.file.path, {
                    folder: 'books',
                }, (error, result) => {
                    if (error) {
                        return res.status(500).json({ error, message: 'upload image fail!!!' });
                    }
                });
                const { url: image } = uploadImage;
                const bookModel = new BookSchema_1.default({
                    name,
                    image,
                    price,
                    summary,
                    numberPage,
                    publishingDate,
                }).save();
                const authorModel = new AuthorSchema_1.default({ name: author }).save();
                const publishingCompanyModel = new PublishingCompanySchema_1.default({ name: publishingCompany });
                res.status(201).json({
                    message: 'successfully!!!',
                    body: JSON.parse(req.body.data),
                    bookModel,
                    authorModel,
                    publishingCompanyModel,
                });
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ error: error.message });
            }
        });
    }
}
exports.default = new BookController();
//# sourceMappingURL=BookController.js.map