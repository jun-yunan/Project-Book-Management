import express from 'express';
import BookController from '../app/controllers/BookController';
import multerUploadMiddleware from '../app/middleware/multerUploadMiddleware';
import BookBorrowingFormController from '../app/controllers/BookBorrowingFormController';
import authenticationMiddleware from '../app/middleware/authenticationMiddleware';

export const router = express.Router();

// Book

export default (router: express.Router) => {
    router.post('/users/:userId/add-book', multerUploadMiddleware.single('image'), BookController.addBook);
    router.get('/books', BookController.getBooks);
    router.post(
        '/create-book-borrowing-form',
        authenticationMiddleware,
        BookBorrowingFormController.createBookBorrowingForm,
    );
};
