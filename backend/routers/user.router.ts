
import express from 'express';
import { LogIn, SignUp, resetPassword } from '../cotrollers/user.controller';
const UserRouter=express.Router();

UserRouter.post('/signup',SignUp);
UserRouter.post('/login',LogIn);
UserRouter.post('/resetPass',resetPassword);

export default UserRouter