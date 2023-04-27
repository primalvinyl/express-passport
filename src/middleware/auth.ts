import { Application } from 'express';
import session from 'express-session';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

export default (app: Application) => {
    app.use(session({
        secret: process.env.SESSION_TOKEN || '',
        resave: false,
        saveUninitialized: false,
    }));
    app.use(passport.session());

    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((user, done) => done(null, user as undefined));

    // initialize authentication strategy
    passport.use(new LocalStrategy((username, password, done) => {
        return done(null, { id: '12345' });
    }));
};
