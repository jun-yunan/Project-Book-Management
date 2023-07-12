import { sign, verify } from 'jsonwebtoken';
import 'dotenv/config';

const accessTokenSecretKey = process.env.ACCESS_TOKEN_SECRET_KEY;
const refreshTokenSecretKey = process.env.REFRESH_TOKEN_SECRET_KEY;

export const generateAccessToken = (payload: {}) => {
    const accessToken = sign(payload, accessTokenSecretKey, { expiresIn: '30s' });
    return accessToken;
};

export const generateRefreshToken = (payload: {}) => {
    const refreshToken = sign(payload, refreshTokenSecretKey, { expiresIn: '365d' });
    return refreshToken;
};

export const verifyToken = (token: string, secretKey: string) => {
    try {
        const decode = verify(token, secretKey);
        return decode;
    } catch (error) {
        console.log(error);
        return null;
    }
};
