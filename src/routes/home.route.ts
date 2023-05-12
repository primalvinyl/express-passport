import { Router } from 'express';

const homeRoute = Router();

homeRoute.get('/', (req, res) => res.json({ message: 'home' }));

homeRoute.get(
    '/protected',
    (req, res, next) => {
        if (req.isAuthenticated()) next();
        else next({ message: 'access denied' });
    },
    (req, res) => res.json({ message: 'access granted' })
);

homeRoute.all('/*', (req, res, next) => next({ message: 'endpoint does not exist' }));

export default homeRoute;
