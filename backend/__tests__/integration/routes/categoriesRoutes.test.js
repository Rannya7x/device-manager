import request from 'supertest';
import app from '../../../src/app.js';
import db from '../../../db.js';

describe("Categories API", () => {
    afterAll(async () => {
        await db.end();
    });
    describe("GET /categories", () => {
        it("should responde with 200 ok", async () => {
            const response = await request(app).get("/categories");
            expect(response.status).toBe(200);
        });
        it("should return JSON content type", async () => {
            const response = await request(app).get("/categories");
            expect(response.headers["content-type"]).toMatch(/json/);
        });
        it("should return an array", async () => {
            const response = await request(app).get("/categories");
            expect(Array.isArray(response.body)).toBe(true);
        });
        it("should return valid categories from the data source", async () => {
            const response = await request(app).get("/categories");
            response.body.forEach(category => {
                expect(category).toEqual(expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    created_at: expect.any(String),
                    updated_at: expect.any(String)
                }));
            });
        });
    });
});
