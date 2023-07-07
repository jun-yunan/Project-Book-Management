import mongoose from 'mongoose';
import 'dotenv/config';

export const connect = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.bezuxpu.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
        );
        console.log(`Connected to the database ${process.env.DB_NAME} successfully!`);
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
};
