import request from "supertest";
import app from "../../app.js";

describe("GET /devices", () => {
    it("should respond with 200 OK", async () => {
        const response = await request(app).get("/devices");
        expect(response.status).toBe(200);
    });
    it("should return JSON content type", async () => {
        const response = await request(app).get("/devices");
        expect(response.headers["content-type"]).toMatch(/json/);
    });
    it("should return an array", async () => {
        const response = await request(app).get("/devices");
        expect(Array.isArray(response.body)).toBe(true);
    });
    it("should return valid devices from the data source", async () => {
        const response = await request(app).get("/devices");
        
        response.body.forEach(device => {
            expect(device).toEqual(expect.objectContaining({
                id: expect.any(Number),
                category_id: expect.any(Number),
                color: expect.any(String),
                part_number: expect.any(Number),
                created_at: expect.any(String),
                updated_at: expect.any(String)
            }));
        });
    });
});