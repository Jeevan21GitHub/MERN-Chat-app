import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

export const connectToMongoDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("connected MongoDB");
    }
    catch(err){
        console.log(`MongoDB Err ${err}`);
    }
}

