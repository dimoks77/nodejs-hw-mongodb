// src/middlewares/isValidId.js
import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

const validateId = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    return next(createHttpError(404, `'${contactId}' is not a valid id`));
  }
  next();
};

export default validateId;