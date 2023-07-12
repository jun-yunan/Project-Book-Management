import mongoose, { Types, Schema } from 'mongoose';

export interface ILibrarian {
    name: string;
    cardId: string;
    gender: string;
    numberPhone: string;
    birthDay: string;
    email: string;
    address: string;
    bookBorrowingForm: Types.ObjectId;
}

const LibrarianSchema = new Schema<ILibrarian>(
    {
        name: { type: String },
        cardId: { type: String },
        gender: { type: String },
        numberPhone: { type: String },
        birthDay: { type: String },
        email: { type: String },
        address: { type: String },
        bookBorrowingForm: { type: Schema.Types.ObjectId, ref: 'BookBorrowingForm' },
    },
    { timestamps: true },
);

export default mongoose.model<ILibrarian>('Librarian', LibrarianSchema);
