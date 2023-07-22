import { Request, Response } from 'express';
import { hash, compare } from 'bcrypt';
import { generateAccessToken, generateRefreshToken } from '../../helpers/authenticationJWT';
import MemberSchema from '../models/MemberSchema';

class AuthController {
    async signIn(req: Request, res: Response) {
        try {
            const { email, password }: { email: string; password: string } = req.body;

            if (!email || !password) {
                return res.status(400).json({ message: 'email and password is required' });
            }

            const member = await MemberSchema.findOne({ email }).select('+authentication.password').lean();
            if (!member) {
                return res.status(400).json({ message: 'Tài khoản không chính xác!!!' });
            }

            const isPassword = await compare(password, member.authentication.password);

            if (!isPassword) {
                return res.status(403).json({ message: 'Mật khẩu không chính xác!!!' });
            }

            const { authentication, ...otherMember } = member;

            const accessToken = generateAccessToken(otherMember);
            const refreshToken = generateRefreshToken(otherMember);

            const updateMember = await MemberSchema.findOneAndUpdate(
                { _id: member._id },
                { $set: { 'authentication.refreshToken': refreshToken } },
                { new: true },
            )
                .select('+authentication.refreshToken')
                .lean();

            res.cookie('refreshToken', updateMember.authentication.refreshToken, {
                domain: 'localhost',
                path: '/',
            });

            return res
                .status(200)
                .json({ ...otherMember, accessToken, refreshToken })
                .end();
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.message });
        }
    }

    async signUp(req: Request, res: Response) {
        try {
            const {
                email,
                name,
                firstName,
                lastName,
                password,
            }: { email: string; name: string; password: string; firstName: string; lastName: string } =
                req.body;
            if (!email || !firstName || !lastName || !password) {
                return res.status(400).json({ message: 'email, name, password is required!!!' });
            }

            const existMember = await MemberSchema.exists({ email });
            if (existMember) {
                return res.status(403).json({ message: 'Tài khoản đã tồn tại!!!' });
            }

            const hashedPassword = await hash(password, 10);

            const member = await MemberSchema.create({
                name,
                email,
                firstName,
                lastName,
                authentication: { password: hashedPassword },
            }).catch((error) => {
                if (error) {
                    return res.status(403).json({ message: 'Tạo tài khoản thất bại!!!' }).end();
                }
            });
            return res.json({ message: 'successfully', body: req.body, member }).end();
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.message });
        }
    }
}

export default new AuthController();
