const mongoose = require('mongoose');

const { Schema } = mongoose;

const TypeBookSchema = new Schema(
    {
        name: { type: String },
        bookId: { type: mongoose.Types.ObjectId, ref: 'Book' },
    },
    { timestamps: true },
);

module.exports = mongoose.model('TypeBook', TypeBookSchema);
