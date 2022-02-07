import { ObjectId } from 'mongodb';
import db from '../db.js';

export async function getStatement(request, response) {
  const { user } = response.locals;
  try {
    const statement = await db.collection('walletMovements').find({ userId: user._id }).toArray();
    response.send(statement).status(200);
  } catch {
    response.sendStatus(500);
  }
}

export async function walletMovements(request, response) {
  const { user } = response.locals;
  const movement = request.body;

  try {
    await db.collection('walletMovements').insertOne({ ...movement, userId: user._id });
    response.sendStatus(201);
  } catch {
    response.sendStatus(500);
  }
}

export async function deleteMovement(request, response) {
  const { id } = request.params;
  try {
    const movement = await db.collection('walletMovements').findOne({ _id: new ObjectId(id) });
    if (!movement) {
      response.sendStatus(404);
      return;
    }
    await db.collection('walletMovements').deleteOne({ _id: new ObjectId(id) });
    response.sendStatus(200);
  } catch {
    response.sendStatus(500);
  }
}
