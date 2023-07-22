import { Request, Response } from 'express';
import MemberSchema from '../models/MemberSchema';
import cloudinary from '../../config/cloudinaryConfig';

class MemberController {
    async changeAvatar(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            if (!req.file || !userId) {
                return res.status(400).json({ message: 'Data is missing!' });
            }

            const uploadImage = await cloudinary.v2.uploader.upload(
                req.file.path,
                {
                    folder: 'avatar',
                },
                (error, result) => {
                    if (error) return res.status(500).json({ message: 'Upload image fail!!!' });
                },
            );
            const { url: avatar } = uploadImage;
            const member = await MemberSchema.findByIdAndUpdate(userId, { $set: { avatar } }, { new: true });
            return res
                .status(200)
                .json({ message: 'successfully!', params: req.params, file: req.file, member })
                .end();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getProfile(req: Request, res: Response) {
        try {
            const { userId } = req.params;

            const member = await MemberSchema.findById(userId).lean().exec();
            if (!member) {
                return res.json(404).json({ message: 'Not found user!!!' });
            }

            const { authentication, ...profileMember } = member;
            return res.status(200).json({ ...profileMember });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async updatePersonInformation(req: Request, res: Response) {
        try {
            const { firstName, lastName, address, country, birthDay, phone, gender } = req.body;
            const { userId } = req.params;

            const updateMember = await MemberSchema.findByIdAndUpdate(
                userId,
                {
                    $set: { address, gender, country, firstName, lastName, numberPhone: phone, birthDay },
                },
                { returnDocument: 'after' },
            )
                .lean()
                .exec();

            return res.status(200).json({ body: req.body, params: req.params, updateMember });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default new MemberController();
