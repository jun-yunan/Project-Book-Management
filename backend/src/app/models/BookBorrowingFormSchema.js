const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookBorrowingFormSchema = new Schema(
    {
        borrowDate: { type: Date },
        dueDate: { type: Date },
        memberName: { type: String },
        bookTitle: [{ type: String }],
        quantity: { type: Number },
        status: { type: String },
        note: { type: String },
        memberId: { type: mongoose.Types.ObjectId, ref: 'Member' },
        bookId: { type: mongoose.Types.ObjectId, ref: 'Book' },
        staffId: { type: mongoose.Types.ObjectId, ref: 'Librarian' },
    },
    { timestamps: true },
);

module.exports = mongoose.model('BookBorrowingForm', BookBorrowingFormSchema);
