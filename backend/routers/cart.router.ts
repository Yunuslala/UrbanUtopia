import express from 'express'
import { AddToCart, GetCartData, IncreaseQuantity, removeFromCart } from '../cotrollers/cart.controller';
const CartRouter=express.Router();

CartRouter.post('/add',AddToCart);
CartRouter.patch('/quantity',IncreaseQuantity);
CartRouter.delete("/remove",removeFromCart);
CartRouter.get('/get',GetCartData);


export default CartRouter