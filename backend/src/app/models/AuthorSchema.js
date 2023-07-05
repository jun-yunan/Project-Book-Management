const mongoose = require('mongoose');

const { Schema } = mongoose;

const AuthSchema = new Schema(
    {
        name: { type: String },
        gender: { type: String },
        birthDay: { type: Date },
        numberPhone: { type: String },
        address: { type: String },
        email: { type: String },
        avatar: { type: String },
        bookId: { type: mongoose.Types.ObjectId, ref: 'Book' },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Author', AuthSchema);
