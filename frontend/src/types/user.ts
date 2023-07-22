export interface PayloadActionUser {
    name: string;
    _id: string;
    avatar: string;
    accessToken: string;
    refreshToken: string;
    email: string;
    createdAt: string;
}

export interface IProfile {
    _id: string;
    name: string;
    avatar: string;
    address: string;
    birthDay: string;
    gender: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    country: string;
}
