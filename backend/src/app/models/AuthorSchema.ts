import mongoose, { Date, Schema, Types } from 'mongoose';

interface IAuth {
    name: string;
    gender: string;
    birthDay: string;
    numberPhone: string;
    address: string;
    email: string;
    avatar: string;
    bookId: Types.ObjectId;
}

const AuthSchema = new Schema<IAuth>(
    {
        name: { type: String, required: true },
        gender: { type: String, required: true },
        birthDay: { type: String, required: true },
        numberPhone: { type: String },
        address: { type: String },
        email: { type: String },
        avatar: { type: String },
        bookId: { type: Schema.Types.ObjectId, ref: 'Book' },
    },
    { timestamps: true },
);

export default mongoose.model<IAuth>('Author', AuthSchema);
