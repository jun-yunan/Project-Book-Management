const mongoose = require('mongoose');

const { Schema } = mongoose;

const PublishingCompanySchema = new Schema(
    {
        name: { type: String },
        email: { type: String },
        address: { type: String },
        numberPhone: { type: String },
        bookId: { type: mongoose.Types.ObjectId, ref: 'Book' },
    },
    { timestamps: true },
);

module.exports = mongoose.model('PublishingCompany', PublishingCompanySchema);
