"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const BookSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Book name is required!!!'],
        min: [6, 'Must be at least 6, got {VALUE}'],
        max: 100,
    },
    publishingDate: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    numberPage: { type: Number, required: true },
    summary: { type: String, required: true },
    authorId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Author' },
    languageId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Language' },
    publishingCompanyId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'PublishingCompany' },
    typeBookId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'TypeBook' },
    specializedId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Specialized' },
}, { timestamps: true });
exports.default = mongoose_1.default.model('Book', BookSchema);
//# sourceMappingURL=BookSchema.js.map