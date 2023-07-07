"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const BookController_1 = __importDefault(require("../app/controllers/BookController"));
const multerUploadMiddleware_1 = __importDefault(require("../app/middleware/multerUploadMiddleware"));
exports.router = express_1.default.Router();
// Book
exports.default = (router) => {
    router.post('/users/:userId/add-book', multerUploadMiddleware_1.default.single('image'), BookController_1.default.addBook);
};
//# sourceMappingURL=users.js.map