import { Document,Schema,model } from "mongoose";

interface Category extends Document{
    name:string,
    isAvailable:Boolean,
}

const categorySchema=new Schema<Category>({
    name:{type:String,required:true},
    isAvailable:{type:Boolean,default:false}
})

export const CategoryModel=model<Category>('Categorie',categorySchema);
