import { Router } from 'express';

const userRoute = Router();

userRoute.get(
    '/',
    (req, res, next) => {
        if (req.isAuthenticated()) next();
        else next({ message: 'access denied' });
    },
    (req, res) => res.json({ message: req.user })
);

userRoute.all('/*', (req, res, next) => next({ message: 'user endpoint does not exist' }));

export default userRoute;
