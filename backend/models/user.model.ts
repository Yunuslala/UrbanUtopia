import { Document, Schema, model } from 'mongoose';


interface User extends Document{
    name:string,
    email:string,
    userID:string,
    password:string,
    mobile?:number,
    image?:string,
    isBlocked:Boolean,
    role:string
}

const userSchema=new Schema<User>({
    name:{type:String,required:true},
    email:{type:String,required:true},
    image:{type:String},
    password:{type:String,required:true},
    mobile:{type:String},
    userID:{type:String,required:true},
    isBlocked:{type:Boolean,default:false},
    role:{type:String,default:'User'},
});

export const UserModel=model<User>('User',userSchema);
