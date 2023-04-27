import { Router } from 'express';
import passport from 'passport';

const authRoute = Router();

authRoute.post(
    '/login',
    passport.authenticate('local', { failWithError: true }),
    (req, res) => res.json({ message: 'successfully signed in' })
);

authRoute.post(
    '/logout',
    (req, res, next) => {
        req.logout((error) => {
            if (error) next('sign out error');
            else res.json({ message: 'signed out' });
        });
    }
);

authRoute.all('/*', (req, res, next) => next('auth endpoint does not exist'));

export default authRoute;
