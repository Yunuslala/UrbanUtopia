import { Request,Response } from "express";
import OrderRouter from "../routers/order.router";


export const CreateOrder=(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        return res.status(500).send({"msg":"something went wrong",error})
        console.log(error)
    }
}

export const DeleteOrder=(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        return res.status(500).send({"msg":"something went wrong",error})
        console.log(error)
    }
}

export const placeOrder=(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        return res.status(500).send({"msg":"something went wrong",error})
        console.log(error)
    }
}

export const GetOrder=(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        return res.status(500).send({"msg":"something went wrong",error})
        console.log(error)
    }
}

export const OrderHistory=(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        return res.status(500).send({"msg":"something went wrong",error})
        console.log(error)
    }
}
