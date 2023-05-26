import { Application } from 'express';
import homeRoute from './home.route';
import authRoute from './auth.route';
import userRoute from './user.route';

export default (app: Application) => {
    app.use('/auth', authRoute);
    app.use('/user', userRoute);
    app.use('/', homeRoute);
};
