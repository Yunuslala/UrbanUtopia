import { Document,Schema,model,Types } from "mongoose";

interface CartItem{
    productId:Types.ObjectId,
    quantity:number,
    status:string,
    price:number
}


interface cart extends Document{
    UserID:Types.ObjectId,
    Item:CartItem[],
    createdAt:Date,
    updatedAt:Date,
}

const CartSchema=new Schema<cart>({
    UserID:{type:Schema.Types.ObjectId,require:true},
    Item:[
        {
            productId:{type:Schema.Types.ObjectId,require:true},
            quantity:{type:Number,default:1},
            price:{type:Number,require:true},
            status:{type:String,default:'Added in cart'}
        }
    ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },


})

export const CartModel=model<cart>('Cart',CartSchema);
