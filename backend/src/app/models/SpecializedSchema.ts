import mongoose, { Schema, Types } from 'mongoose';

export interface ISpecialized {
    name: string;
    bookId: Types.ObjectId[];
}

const SpecializedSchema = new Schema<ISpecialized>(
    {
        name: { type: String, unique: true },
        bookId: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
    },
    { timestamps: true },
);

export default mongoose.model<ISpecialized>('Specialized', SpecializedSchema);
