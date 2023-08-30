import { Document,Schema,model,Types } from "mongoose";

interface Product extends Document{
    ProductName:string,
    description:string,
    images:string[],
    categoryID:Types.ObjectId,
    isAuthorized:Boolean,
   
    price:number,
    rating?:{
        average:number,
        count:number
    };
    reviews?:Types.ObjectId[];
    variants:{
        color:string;
        size:string;
        stock?:number;
    }[];
    createdAt: Date;
    updatedAt: Date;
}

const ProductSchema=new Schema<Product>({
    ProductName:{type:String,required:true},
    description:{type:String,required:true},
    images:[{type:String,require:true}],
    categoryID:{type:Schema.Types.ObjectId,ref:'categorie'},
    isAuthorized:{type:Boolean,default:true},
    price:{type:Number,required:true},
    rating:{
        average:{type:Number,default:0},
        count:{type:Number,default:0}
    },
    reviews:[{type:Schema.Types.ObjectId,ref:'review'}],
    variants:{
        color:{type:String,require:true},
        size:{type:String,require:true},
        stock:{type:Number,default:1}
    },
    createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const ProductModel=model<Product>("product",ProductSchema);