import express from 'express';
import book from './book';
import auth from './auth';
import user from './user';

const router = express.Router();

export default (): express.Router => {
    user(router);
    book(router);
    auth(router);
    return router;
};
