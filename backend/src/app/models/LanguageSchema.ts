import mongoose, { Schema, Types } from 'mongoose';

export interface ILanguage {
    name: string;
    bookId: Types.ObjectId[];
}

const LanguageSchema = new Schema<ILanguage>(
    {
        name: { type: String, unique: true },
        bookId: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
    },
    { timestamps: true },
);

export default mongoose.model<ILanguage>('Language', LanguageSchema);
