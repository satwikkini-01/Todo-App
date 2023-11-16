import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const USERNAME = process.env.DATABASE_USERNAME;
const PASSWORD = process.env.DATABASE_PASSWORD;

const Connection = () =>{


    const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.ewwzrvt.mongodb.net/?retryWrites=true&w=majority`

    mongoose.connect(MONGODB_URL);

    mongoose.connection.on('connected', () => {
        console.log('Database Connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database Disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting to the database');
    })
}


export default Connection;