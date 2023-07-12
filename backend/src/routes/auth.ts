import express from 'express';
import AuthController from '../app/controllers/AuthController';
export const router = express.Router();

// Book

export default (router: express.Router) => {
    router.post('/auth/signIn', AuthController.signIn);
    router.post('/auth/signUp', AuthController.signUp);
};
