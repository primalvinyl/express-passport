import { Router } from 'express';
import passport from 'passport';

const authRoute = Router();

authRoute.post(
    '/login',
    (req, res, next) => {
        if (req.isAuthenticated()) next({ message: 'already signed in' });
        else next();
    },
    passport.authenticate('local'),
    (req, res) => {
        res.json({ message: 'successfully signed in' });
    },
);

authRoute.post(
    '/logout',
    (req, res, next) => {
        if(!req.isAuthenticated()) next({ message: 'already signed out' });
        else next();
    },
    (req, res, next) => {
        req.logout((error) => {
            if (error) next({ status: 500, message: 'sign out failed' });
            else res.json({ message: 'successfully signed out' });
        });
    }
);

authRoute.post(
    '/signup',
    (req, res, next) => {
        if (req.isAuthenticated()) next({ message: 'already signed in' });
        else next();
    },
    (req, res, next) => {
        const { username, password } = req.body;
        if (username && password) {
            const newUser = { username, password };
            req.login(newUser, (error) => {
                if (error) next({ status: 500, message: 'sign up failed' });
                else res.json({ message: 'successfully signed up' });
            });
        } else next({ message: 'missing credentials' });
    }
);

authRoute.all('/*', (req, res, next) => next({ message: 'auth endpoint does not exist' }));

export default authRoute;
