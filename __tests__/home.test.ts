import request from 'supertest';
import app from '../src/app';

describe('homeRoutes', () => {
    const testClient = request(app);

    it('root endpoint should return data', async () => {
        await testClient
            .get('/')
            .expect(200, { message: 'home' });
    });

    it('protected endpoint should return failure message if not logged in', async () => {
        await testClient
            .get('/protected')
            .expect(400, { message: 'access denied', error: true });
    });

    it('protected endpoint should return data if logged in', async () => {
        const authClient = request.agent(app);

        //sign in
        await authClient
            .post('/auth/login')
            .send({ username: 'test', password: 'test' });

        await authClient
            .get('/protected')
            .expect(200, { message: 'access granted' });
    });
});
