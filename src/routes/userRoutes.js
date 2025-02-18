import express from 'express';
import { createUser } from '../controllers/userSignupController.js';
import { loginUser } from '../controllers/userLoginController.js';

const userRouter = express.Router();
userRouter.post('/signup', createUser);
userRouter.post('/login', loginUser);

export default userRouter;
