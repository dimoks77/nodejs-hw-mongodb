import createHttpError from 'http-errors';
import swaggerUI from 'swagger-ui-express';
import fs from 'node:fs';
import path from 'path';
import { SWAGGER_PATH } from '../constants/index.js';

export const swaggerDocs = () => {
  console.log(`Swagger path: ${SWAGGER_PATH}`);
  
  try {
    if (!fs.existsSync(SWAGGER_PATH)) {
      console.error(`Swagger file does not exist at path: ${SWAGGER_PATH}`);
      throw new Error("Swagger file does not exist");
    }
    
    const swaggerDoc = JSON.parse(fs.readFileSync(SWAGGER_PATH).toString());
    return [...swaggerUI.serve, swaggerUI.setup(swaggerDoc)];
  } catch (err) {
    console.error(`Error loading Swagger docs: ${err.message}`);
    return (req, res, next) =>
      next(createHttpError(500, "Can't load swagger docs"));
  }
};
