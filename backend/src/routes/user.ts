import express from 'express';
import MemberController from '../app/controllers/MemberController';
import multerUploadMiddleware from '../app/middleware/multerUploadMiddleware';

export const router = express.Router();

// User

export default (router: express.Router) => {
    router.post(
        '/user/:userId/change-avatar',
        multerUploadMiddleware.single('image'),
        MemberController.changeAvatar,
    );
    router.get('/user/:userId/profile', MemberController.getProfile);
    router.put('/user/:userId/profile/edit-person-information', MemberController.updatePersonInformation);
};
