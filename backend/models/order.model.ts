import { Document,Schema,model,Types } from "mongoose";



interface Order extends Document{
    price:number;
    OrderItem:Types.ObjectId;
    isPaid:Boolean;
    createdAt: Date;
    updatedAt: Date;
}

const OrderSchema=new Schema<Order>({
    price:{type:Number,required:true},
    OrderItem:{type:Schema.Types.ObjectId,required:true},
    isPaid:{type:Boolean,default:false},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export const OrderModel=model<Order>("Order",OrderSchema);