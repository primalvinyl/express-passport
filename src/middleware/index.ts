import express, { Application } from 'express';
import morgan from 'morgan';

export default (app: Application) => {
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
}; 
