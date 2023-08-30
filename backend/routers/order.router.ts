import express from 'express'
import { CreateOrder, DeleteOrder, GetOrder, OrderHistory, placeOrder } from '../cotrollers/order.controller';
const OrderRouter=express.Router();

OrderRouter.post('/create',CreateOrder);
OrderRouter.post('/place',placeOrder)
OrderRouter.delete('/delete',DeleteOrder);
OrderRouter.get('/OrderHistory',OrderHistory);
OrderRouter.get('/get',GetOrder);

export default OrderRouter