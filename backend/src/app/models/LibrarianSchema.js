const mongoose = require('mongoose');

const { Schema } = mongoose;

const LibrarianSchema = new Schema(
    {
        name: { type: String },
        cartId: { type: String },
        gender: { type: String },
        numberPhone: { type: String },
        birthDay: { type: Date },
        email: { type: String },
        address: { type: String },
        bookBorrowingForm: { type: mongoose.Types.ObjectId, ref: 'BookBorrowingForm' },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Librarian', LibrarianSchema);
