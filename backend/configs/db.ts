import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const mongourl=process.env.mongourl as string

export const connection=mongoose.connect(mongourl);