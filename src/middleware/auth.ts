import { Application } from 'express';
import cookieSession from 'cookie-session';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

export default (app: Application) => {
    // session middleware
    app.use(cookieSession({
        secret: process.env.SESSION_TOKEN
    }));
    app.use(passport.session());

    // middleware that fixes passport/cookie-session compatibility
    // passport calls session.regenerate and session.save methods
    // cookie-session does not have regenerate or save methods
    app.use((req, res, next) => {
        if (req.session && !req.session.regenerate) {
            (req.session as Record<string, any>).regenerate = (cb: Function) => cb();
        }
        if (req.session && !req.session.save) {
            (req.session as Record<string, any>).save = (cb: Function) => cb();
        }
        next();
    });

    // session data handling
    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((user, done) => done(null, user as undefined));

    // authentication strategy
    passport.use(new LocalStrategy((username, password, done) => {
        done(null, { username });
    }));
};
