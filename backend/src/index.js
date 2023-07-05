const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const database = require('./config/databaseConfig');
const route = require('./routes');
const PORT = 5500 || process.env.PORT;

database.connect();
app.use(cors({ credentials: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});
route(app);
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
