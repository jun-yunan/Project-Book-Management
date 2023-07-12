import mongoose, { Date, Schema, Types } from 'mongoose';

export interface IBook {
    name: string;
    publishingDate: string;
    price: number;
    image: string;
    numberPage: number;
    summary: string;
    authorId: Types.ObjectId;
    languageId: Types.ObjectId;
    publishingCompanyId: Types.ObjectId;
    bookCategoryId: Types.ObjectId;
    specializedId: Types.ObjectId;
}

const BookSchema = new Schema<IBook>(
    {
        name: {
            type: String,
            required: [true, 'Book name is required!!!'],
            min: [6, 'Must be at least 6, got {VALUE}'],
            max: 100,
        },
        publishingDate: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: true },
        numberPage: { type: Number, required: true },
        summary: { type: String, required: true },
        authorId: { type: Schema.Types.ObjectId, ref: 'Author' },
        languageId: { type: Schema.Types.ObjectId, ref: 'Language' },
        publishingCompanyId: { type: Schema.Types.ObjectId, ref: 'PublishingCompany' },
        bookCategoryId: { type: Schema.Types.ObjectId, ref: 'TypeBook' },
        specializedId: { type: Schema.Types.ObjectId, ref: 'Specialized' },
    },
    { timestamps: true },
);

export default mongoose.model<IBook>('Book', BookSchema);
