import request from 'supertest';
import app from '../src/app';

describe('authRoutes', () => {
    const testClient = request(app);
    const authClient = request.agent(app);

    beforeAll(async () => {
        // sign in
        await authClient
            .post('/auth/login')
            .send({ username: 'test', password: 'test' });
    });

    it('sign in success should return success message', async () => {
        await testClient
            .post('/auth/login')
            .send({ username: 'test', password: 'test' })
            .expect(200, { message: 'successfully signed in' });
    });

    it('sign in fail should return failure message', async () => {
        await testClient
            .post('/auth/login')
            .send({ username: 'wrong', password: 'wrong' })
            .expect(400, { message: 'authentication failed', error: true });
    });

    it('sign out success should return success message', async () => {
        await authClient
            .post('/auth/logout')
            .expect(200, { message: 'successfully signed out' });
    });

    it('sign out when already signed out should return failure message', async () => {
        await testClient
            .post('/auth/logout')
            .expect(400, { message: 'already signed out', error: true });
    });

    it('sign up success should sign in user and return success message', async () => {
        await testClient
            .post('/auth/signup')
            .send({ username: 'test', password: 'test' })
            .expect(200, { message: 'successfully signed up' });
    });

    it('sign up without credentials should return failure message', async () => {
        await testClient
            .post('/auth/signup')
            .send({ username: '', password: '' })
            .expect(400, { message: 'missing credentials', error: true });
    });
});
