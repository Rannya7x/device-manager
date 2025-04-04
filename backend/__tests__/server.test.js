import { app, server } from '../server.js';
import request from 'supertest';

describe("GET /", () => {
    afterAll((done) => {
        server.close(done);
    });
    
    it("should return Hello World", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Hello World");
    });
});