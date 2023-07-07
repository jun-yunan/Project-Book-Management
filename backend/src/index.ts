import express, { Express, Response, Request } from 'express';
import { connect } from './config/databaseConfig';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import 'dotenv/config';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import router from './routes';
const app: Express = express();

connect();
// const route = require('../src/routes');

const PORT = 5500 || process.env.PORT;

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});
// route(app);
app.use('/api', router());
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
