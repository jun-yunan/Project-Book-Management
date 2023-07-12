import mongoose, { Schema, Types } from 'mongoose';

export interface IBookCategory {
    name: string;
    bookId: Types.ObjectId[];
}

const BookCategorySchema = new Schema<IBookCategory>(
    {
        name: { type: String, unique: true },
        bookId: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
    },
    { timestamps: true },
);

export default mongoose.model<IBookCategory>('TypeBook', BookCategorySchema);
