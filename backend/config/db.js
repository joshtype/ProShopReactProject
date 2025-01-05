/*
 * Connect to database via Mongoose.
*/
import mongoose from "mongoose";

// define async method to connect to DB
const connectDB = async () => { 
    try {
        // wait for promise from mongoose.connect with env.mongo_uri passed in
        const conn = await mongoose.connect(process.env.MONGO_URI);
        
        // behavior for successful connection
        console.log(`MongoDB Connected: ${ conn.connection.host }`);
    } catch(error) {
        // behavior for connection error
        console.log(`Error: ${ error.message }`);
        process.exit(1);
    }
};

export default connectDB;
