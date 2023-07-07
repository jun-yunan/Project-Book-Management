"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const databaseConfig_1 = require("./config/databaseConfig");
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
(0, databaseConfig_1.connect)();
// const route = require('../src/routes');
const PORT = 5500 || process.env.PORT;
app.use((0, cors_1.default)({ credentials: true }));
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// route(app);
app.use('/api', (0, routes_1.default)());
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map