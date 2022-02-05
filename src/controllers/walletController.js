import db from '../db.js';

export async function getStatement(request, response) {
  const { user } = response.locals;
  try {
    const statement = await db.collection('walletMovements').find({ userId: user._id }).toArray();
    response.send(statement);
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
