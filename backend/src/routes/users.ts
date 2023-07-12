import express from 'express';
import BookController from '../app/controllers/BookController';
import multerUploadMiddleware from '../app/middleware/multerUploadMiddleware';

export const router = express.Router();

// Book

export default (router: express.Router) => {
    router.post('/users/:userId/add-book', multerUploadMiddleware.single('image'), BookController.addBook);
    router.get('/books', BookController.getBooks);
};
