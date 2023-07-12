import mongoose, { Types, Schema } from 'mongoose';

export interface IMember {
    name: string;
    gender: string;
    email: string;
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
        name: { type: String },
        gender: { type: String },
        email: { type: String },
        authentication: {
            password: { type: String, required: true, select: false },
            refreshToken: { type: String, select: false },
        },
        avatar: { type: String },
        address: { type: String },
        numberPhone: { type: String },
        birthDay: { type: String },
        memberType: { type: String },
        // registrationDate: { type: Date },
        status: { type: String },
        bookBorrowingForm: { type: Schema.Types.ObjectId, ref: 'BookBorrowingForm' },
    },
    { timestamps: true },
);

export default mongoose.model<IMember>('Member', MemberSchema);
