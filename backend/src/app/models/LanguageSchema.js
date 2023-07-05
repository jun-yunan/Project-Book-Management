const mongoose = require('mongoose');

const { Schema } = mongoose;

const LanguageSchema = Schema(
    {
        name: { type: String },
        bookId: { type: mongoose.Types.ObjectId, ref: 'Book' },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Language', LanguageSchema);
