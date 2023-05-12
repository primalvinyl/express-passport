import express, { Application } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import middleware from './middleware';
import errorHandler from './middleware/errorHandler';
import routes from './routes';

// initialize environment variables
dotenv.config({
    path: path.join(__dirname, '../', `.env.${process.env.NODE_ENV}`)
});

// initialize express
const app: Application = express();
middleware(app);
routes(app);
errorHandler(app);

export default app;
