import mongoose, { Types, Schema } from 'mongoose';

export interface IMember {
    firstName?: string;
    lastName?: string;
    name: string;
    gender: string;
    email: string;
    country: string;
    authentication: {
        password: string;
        refreshToken: string;
    };
    avatar: string;
    address: string;
    numberPhone: string;
    birthDay: string;
    memberType: string;
    status: string;
    bookBorrowingForm: Types.ObjectId;
}

const MemberSchema = new Schema<IMember>(
    {
        lastName: { type: String },
        firstName: { type: String },
        name: { type: String },
        gender: { type: String },
        email: { type: String },
        country: { type: String },
        authentication: {
            password: { type: String, required: true, select: false },
            refreshToken: { type: String, select: false },
        },
        avatar: { type: String },
        address: { type: String },
        numberPhone: { type: String },
        birthDay: { type: String },
        memberType: { type: String },
        status: { type: String },
        bookBorrowingForm: { type: Schema.Types.ObjectId, ref: 'BookBorrowingForm' },
    },
    { timestamps: true },
);

export default mongoose.model<IMember>('Member', MemberSchema);
