import joi from 'joi';

const movementSchema = joi.object({
  value: joi.number().positive().required(),
  description: joi.string().required(),
  date: joi.date().required(),
  isOutput: joi.boolean().required(),
});
export default movementSchema;
