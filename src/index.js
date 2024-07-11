// src/index.js
import { initializeMongoConnection } from './db/initMongoConnection.js';
import { startServer } from './server.js';

const bootstrap = async () => {
  await initializeMongoConnection();
  startServer();
};

bootstrap();