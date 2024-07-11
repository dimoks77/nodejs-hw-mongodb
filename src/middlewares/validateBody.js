import Joi from 'joi';
import createHttpError from 'http-errors';
import { contactSchema } from '../utils/validationSchemas.js'; // Импортируем схему валидации

export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, {
      abortEarly: false,
    });
    next();
  } catch (err) {
    const error = createHttpError(400, 'Bad Request', {
      errors: err.details,
    });
    next(error);
  }
};

// Используем схему для валидации контактов
export const validateContact = validateBody(contactSchema);
