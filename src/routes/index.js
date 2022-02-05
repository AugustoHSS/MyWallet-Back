import express from 'express';
import authRouter from './authRouter.js';
import walletRouter from './walletRouter.js';

const router = express.Router();
router.use(authRouter);
router.use(walletRouter);

export default router;
