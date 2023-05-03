import request from 'supertest';
import passport from 'passport';
import app from '../src/app';

describe('homeRoutes', () => {
    it('root endpoint should return data', async () => {
        await request(app)
            .get('/')
            .expect(200, { message: 'home' });
    });

    it('protected endpoint should return error if not logged in', async () => {
        await request(app)
            .get('/protected')
            .expect(400, { error_message: 'session error', error: true });
    });

    it('protected endpoint should return data if logged in', async () => {
        await request(app)
            .get('/protected')
            .expect(200, { message: 'accessed protected endpoint' });
    });
});
