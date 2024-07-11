// src/server.js
import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { env } from './env.js';
import router from './routes/contacts.js';
import { handleError } from './middlewares/errorHandler.js';
import { handleNotFound } from './middlewares/notFoundHandler.js';

const PORT = Number(env('PORT', '3000'));

export const startServer = () => {
  const app = express();

  app.use(cors());

  app.use(express.json());

  app.use(
    pino({
      transport: { target: 'pino-pretty' },
    }),
  );

  app.use(router);

  app.use(handleError);

  app.use('*', handleNotFound);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};