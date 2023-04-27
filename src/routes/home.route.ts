import { Router } from 'express';

const homeRoute = Router();

homeRoute.get('/', (req, res) => res.json({ message: 'home' }));

homeRoute.get('/protected', (req, res, next) => {
    if (req.isAuthenticated()) res.json({ message: 'accessed protected endpoint' });
    else next('session error');
});

homeRoute.all('/*', (req, res, next) => next('endpoint does not exist'));

export default homeRoute;
