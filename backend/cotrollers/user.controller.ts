import { Request,Response } from "express"
export const SignUp=(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        return res.status(500).send({"msg":"something went wrong",error})
        console.log(error)
    }
}

export const LogIn=(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        return res.status(500).send({"msg":"something went wrong",error})
        console.log(error)
    }
}

export const resetPassword=(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        return res.status(500).send({"msg":"something went wrong",error})
        console.log(error)
    }
}
