import request from 'supertest';
import app from '../server.js';

describe('Server configuration', () => {
    it('Should respond to /devices with 200 status code', async () => {
        const response = await request(app).get('/devices');
        expect(response.status).toBe(200);
    });
    it('Should respond with 404 for non-existent routes', async () => {
        const response = await request(app).get('/not-found');
        expect(response.status).toBe(404);
    });
});
