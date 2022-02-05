import userSchema from '../schemas/userSchema.js';

export default function verifyUserSchemaMiddleware(req, res, next) {
  const validation = userSchema.validate(req.body);
  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}
