import mongoose, { Schema, Types } from 'mongoose';

export interface IBookBorrowingForm {
    dueDate: string;
    memberName: string;
    bookTitle: string;
    quantity: number;
    status: string;
    note: string;
    librarianName: string;
    memberId: Types.ObjectId;
    bookId: Types.ObjectId;
    staffId: Types.ObjectId;
}

const BookBorrowingFormSchema = new Schema<IBookBorrowingForm>(
    {
        dueDate: { type: String },
        bookTitle: [{ type: String }],
        quantity: { type: Number },
        status: { type: String },
        note: { type: String },
        memberId: { type: Schema.Types.ObjectId, ref: 'Member' },
        bookId: { type: Schema.Types.ObjectId, ref: 'Book' },
        staffId: { type: Schema.Types.ObjectId, ref: 'Librarian' },
    },
    { timestamps: true },
);

export default mongoose.model<IBookBorrowingForm>('BookBorrowingForm', BookBorrowingFormSchema);
