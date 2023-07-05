const mongoose = require('mongoose');
require('dotenv').config();

async function connect() {
    try {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.bezuxpu.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
            options,
        );
        console.log(`Connected to the database ${process.env.DB_NAME} successfully!`);
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    }
}

module.exports = { connect };
