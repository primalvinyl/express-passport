import passport, { Strategy } from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

export default () => {
    // initialize strategy
    const localStrategy = new LocalStrategy((username, password, done) => {
        if (username === 'fu' && password === 'bar') done(null, { username });
        else done({ message: 'authentication failed' });
    });

    // bind strategy to passport
    passport.use(localStrategy);
};
