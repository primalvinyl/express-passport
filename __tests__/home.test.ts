import request from 'supertest';
import app from '../src/app';

describe('homeRoutes', () => {
    it('root endpoint should return data', async () => {
        await request(app)
            .get('/')
            .expect(200, { message: 'home' });
    });

    it('protected endpoint should return failure message if not logged in', async () => {
        await request(app)
            .get('/protected')
            .expect(400, { message: 'access denied', error: true });
    });

    it('protected endpoint should return data if logged in', async () => {
        await request(app)
            .get('/protected')
            .expect(200, { message: 'access granted' });
    });
});
