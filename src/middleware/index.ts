import express, { Application } from 'express';
import morgan from 'morgan';
import session from './session';
import authentication from './authentication';

export default (app: Application) => {
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    session(app);
    authentication();
}; 
