import request from 'supertest';
import app from '../../src/app.js';

describe('App configuration', () => {
    it('should mounts devices routes at /devices', async () => {
        const response = await request(app).get('/devices/non-existent-route');
        expect(response.status).toBe(404); // 404 proves router is mounted via sub-route

        const baseResponse = await request(app).get('/devices');
        expect(baseResponse.status).not.toBe(404); // proves the base route exists
    });
    
    it('should respond with 404 for non-existent routes', async () => {
        const response = await request(app).get('/not-found');
        expect(response.status).toBe(404);
    });
});
