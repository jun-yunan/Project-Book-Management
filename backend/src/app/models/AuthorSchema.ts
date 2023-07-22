import mongoose, { Date, Schema, Types } from 'mongoose';

export interface IAuthor {
    name: string;
    gender: string;
    birthDay: string;
    numberPhone: string;
    address: string;
    email: string;
    avatar: string;
    bookId: Types.ObjectId[];
}

const AuthorSchema = new Schema<IAuthor>(
    {
        name: { type: String, required: true, unique: true },
        gender: { type: String },
        birthDay: { type: String },
        numberPhone: { type: String },
        address: { type: String },
        email: { type: String },
        avatar: { type: String },
        bookId: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
    },
    { timestamps: true },
);

export default mongoose.model<IAuthor>('Author', AuthorSchema);
