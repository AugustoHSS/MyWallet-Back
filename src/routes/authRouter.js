import express from 'express';
import verifyUserSchema from '../middlewares/verifyUserSchemaMiddleware.js';
import { signUp, signIn } from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/sign-in', signIn);
authRouter.post('/sign-up', verifyUserSchema, signUp);

export default authRouter;
