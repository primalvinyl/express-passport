import request from 'supertest';
import app from '../src/app';

describe('authRoutes', () => {
    it('sign in success should return success message', async () => {
        await request(app)
            .post('/auth/login')
            .send({ username: 'test', password: 'test' })
            .expect(200, { message: 'successfully signed in' });
    });

    it('sign in fail should return failure message', async () => {
        await request(app)
            .post('/auth/login')
            .send({ username: 'wrong', password: 'wrong' })
            .expect(400, { message: 'authentication failed', error: true });
    });

    it('sign out success should return success message', async () => {
        await request(app)
            .post('/auth/logout')
            .expect(200, { message: 'signed out' });
    });

    it('sign out when already signed out should return failure message', async () => {
        await request(app)
            .post('/auth/logout')
            .expect(400, { message: 'already signed out', error: true });
    });

    it('sign up success should sign in user and return success message', async () => {
        await request(app)
            .post('/auth/signup')
            .send({ username: 'test', password: 'test' })
            .expect(200, { message: 'successfully signed up' });
    });

    it('sign up without credentials should return failure message', async () => {
        await request(app)
            .post('/auth/signup')
            .send({ username: '', password: '' })
            .expect(400, { message: 'missing credentials', error: true });
    });
});
