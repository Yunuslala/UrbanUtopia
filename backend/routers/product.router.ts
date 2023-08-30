import express from 'express';
import { AddProdcut, GetAllProduct, UpdateProduct, deleteProduct, filterProducts } from '../cotrollers/product.controller';

const ProductRouter=express.Router();

ProductRouter.post('/Add',AddProdcut);
ProductRouter.get('/Get',GetAllProduct);
ProductRouter.patch('/update',deleteProduct);
ProductRouter.delete('/delete',UpdateProduct);
ProductRouter.get('/filter',filterProducts);

export default ProductRouter

