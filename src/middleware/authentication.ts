import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

function getVerifyFunction() {
    let verifyFunction;
    switch (process.env.NODE_ENV) {
        case 'production':
            verifyFunction = (username: string, password: string, done: Function) => {
                if (username === 'fu' && password === 'bar') done(null, { username });
                else done({ message: 'authentication failed' });
            };
            break;
        default:
            verifyFunction = (username: string, password: string, done: Function) => {
                if (username === 'test' && password === 'test') done(null, { username });
                else done({ message: 'authentication failed' });
            };
    }
    return verifyFunction;
}

export default () => {
    const verifyFunction = getVerifyFunction();
    passport.use(new LocalStrategy(verifyFunction));
};
