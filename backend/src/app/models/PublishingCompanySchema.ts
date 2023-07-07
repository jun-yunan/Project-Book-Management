import mongoose, { Schema, Types } from 'mongoose';

interface IPublishingCompany {
    name: string;
    email: string;
    numberPhone: string;
    address: string;
    bookId: Types.ObjectId;
}

const PublishingCompanySchema = new Schema<IPublishingCompany>(
    {
        name: { type: String },
        email: { type: String },
        address: { type: String },
        numberPhone: { type: String },
        bookId: { type: Schema.Types.ObjectId, ref: 'Book' },
    },
    { timestamps: true },
);

export default mongoose.model<IPublishingCompany>('PublishingCompany', PublishingCompanySchema);
