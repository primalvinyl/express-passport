import express, { Application } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import middleware from './middleware';
import auth from './middleware/auth';
import errorHandler from './middleware/errorHandler';
import routes from './routes';

// initialize environment variables
dotenv.config({
    path: path.join(__dirname, '../', `.env.${process.env.NODE_ENV}`)
});

// initialize express
const app: Application = express();
middleware(app);
auth(app);
routes(app);
errorHandler(app);

export default app;
