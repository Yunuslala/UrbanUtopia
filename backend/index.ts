import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import { connection } from './configs/db';
import UserRouter from './routers/user.router'
import ProductRouter from './routers/product.router'
import OrderRouter from './routers/order.router'
import CategoryRouter from './routers/category.router'
import CartRouter from './routers/cart.router'
const app=express()
dotenv.config();
app.use(cors());
app.use(express.json());

app.use('/User',UserRouter);
app.use('/User',ProductRouter);
app.use('/User',OrderRouter);
app.use('/User',CategoryRouter);
app.use('/User',CartRouter);





app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("db is connected")
    } catch (error) {
        console.log(error)
        console.log("db is not connected")
    }
    console.log(`http://localhost:${process.env.port}`)
})
// console.log(123)