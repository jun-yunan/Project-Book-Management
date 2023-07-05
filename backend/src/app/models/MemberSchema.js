const mongoose = require('mongoose');

const { Schema } = mongoose;

const MemberSchema = new Schema(
    {
        name: { type: String },
        gender: { type: String },
        email: { type: String },
        password: { type: String },
        avatar: { type: String },
        address: { type: String },
        numberPhone: { type: String },
        birthDay: { type: Date },
        memberType: { type: String },
        registrationDate: { type: Date },
        status: { type: String },
        bookBorrowingForm: { type: mongoose.Types.ObjectId, ref: 'BookBorrowingForm' },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Member', MemberSchema);
