import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../../helpers/authenticationJWT';
import 'dotenv/config';
import { JwtPayload, DecodeOptions, VerifyOptions } from 'jsonwebtoken';

const accessTokenSecretKey = process.env.ACCESS_TOKEN_SECRET_KEY;

const authenticationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({ error: 'unauthorized' });
        }

        const accessToken = authHeader.split(' ')[1];
        const isVerifyToken = verifyToken(accessToken, accessTokenSecretKey);

        // console.log(isVerifyToken);

        // if ((isVerifyToken as any).exp < Date.now() / 1000) {
        //     return res.status(401).json({ message: 'Token expired' });
        // }
        if (!isVerifyToken) {
            return res.status(401).json({ error: 'unauthorized' });
        }
        (req as any).user = isVerifyToken;
        return next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
};

export default authenticationMiddleware;
