import { Application } from 'express';
import homeRoute from './home.route';
import authRoute from './auth.route';

export default (app: Application) => {
    app.use('/auth', authRoute);
    app.use('/', homeRoute);
};
