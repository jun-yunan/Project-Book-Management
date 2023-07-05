const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Book name is required!!!'],
            min: [6, 'Must be at least 6, got {VALUE}'],
            max: 100,
        },
        publishingDate: { type: Date, default: Date.now },
        price: { type: Number },
        image: { type: String },
        numberPage: { type: Number },
        summary: { type: String },
        authorId: { type: mongoose.Types.ObjectId, ref: 'Author' },
        languageId: { type: mongoose.Types.ObjectId, ref: 'Language' },
        publishingCompanyId: { type: mongoose.Types.ObjectId, ref: 'PublishingCompany' },
        typeBookId: { type: mongoose.Types.ObjectId, ref: 'TypeBook' },
        specializedId: { type: mongoose.Types.ObjectId, ref: 'Specialized' },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Book', BookSchema);
