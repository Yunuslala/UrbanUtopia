import express from 'express'
import { AddCategory, DeleteCategory, GetAllCategory, UpdateCategory } from '../cotrollers/category.controll';


const CategoryRouter=express.Router();

CategoryRouter.post('/Add',AddCategory);
CategoryRouter.patch('/update',UpdateCategory);
CategoryRouter.delete('/delete',DeleteCategory);
CategoryRouter.get('/getAll',GetAllCategory);

export default CategoryRouter