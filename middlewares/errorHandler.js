// src/middlewares/errorHandler.js
import { HttpError } from 'http-errors';

export const handleError = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      data: err.message,
    });
    return;
  }

  res.status(500).json({
    status: 500,
    message: 'An unexpected error occurred',
    data: err.message,
  });
};