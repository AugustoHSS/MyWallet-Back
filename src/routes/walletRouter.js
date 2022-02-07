import express from 'express';
import { getStatement, walletMovements, deleteMovement } from '../controllers/walletController.js';
import verifyToken from '../middlewares/verifyTokenMiddleware.js';
import verifyMovementSchemaMiddleware from '../middlewares/verifyMovementsSchemaMiddleware.js';

const walletRouter = express.Router();
walletRouter.use(verifyToken);
walletRouter.get('/statement', getStatement);
walletRouter.post('/movements', verifyMovementSchemaMiddleware, walletMovements);
walletRouter.delete('/movements/:id', deleteMovement);

export default walletRouter;
