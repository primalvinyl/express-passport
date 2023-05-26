import passport from 'passport';
import MockStrategy from '../../__mocks__/mockStrategy';
import { Strategy as LocalStrategy } from 'passport-local';

function getStrategy() {
    let strategy;
    switch (process.env.NODE_ENV) {
        case 'production':
            strategy = new LocalStrategy(
                (username: string, password: string, done: Function) => {
                    if (username === 'fu' && password === 'bar') done(null, { username });
                    else done({ message: 'authentication failed' });
                }
            );
            break;
        default:
            strategy = new MockStrategy(
                ({ username, password }: Record<string, any>, done: Function) => {
                    if (username === 'test' && password === 'test') done(null, { username });
                    else done({ message: 'authentication failed' });
                }
            );
    }
    return strategy;
}

export default () => {
    const strategy = getStrategy();
    passport.use('local', strategy);
};
