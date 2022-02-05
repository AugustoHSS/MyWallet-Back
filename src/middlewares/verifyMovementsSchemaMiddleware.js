import movementSchema from '../schemas/movementSchema.js';

export default function verifyMovementSchemaMiddleware(req, res, next) {
  const validation = movementSchema.validate(req.body);
  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}
