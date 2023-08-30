import { CartModel } from "../models/cart.model";
import { Request,Response } from "express";
export const AddToCart=(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        return res.status(500).send({"msg":"something went wrong",error})
        console.log(error)
    }
}

export const IncreaseQuantity=(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        return res.status(500).send({"msg":"something went wrong",error})
        console.log(error)
    }
}

export const removeFromCart=(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        return res.status(500).send({"msg":"something went wrong",error})
        console.log(error)
    }
}

export const GetCartData=(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        return res.status(500).send({"msg":"something went wrong",error})
        console.log(error)
    }
}