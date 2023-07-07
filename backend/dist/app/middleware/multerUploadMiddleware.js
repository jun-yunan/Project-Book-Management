"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/uploads/');
    },
    filename: (req, file, cb) => {
        const ext = path_1.default.extname(file.originalname);
        cb(null, Date.now() + ext);
    },
});
const multerUploadMiddleware = (0, multer_1.default)({
    storage: storage,
    fileFilter: (req, file, callback) => {
        if (file.mimetype.startsWith('image')) {
            callback(null, true);
        }
        else {
            console.log('only jpg & png file supported');
            callback(null, false);
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 8,
    },
});
exports.default = multerUploadMiddleware;
//# sourceMappingURL=multerUploadMiddleware.js.map