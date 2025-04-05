import request from "supertest";
import app from "../../server.js";

describe("GET /devices", () => {
    it("should respond with 200 OK", async () => {
        const response = await request(app).get("/devices");
        expect(response.status).toBe(200);
    });
    it("should returns JSON content type", async () => {
        const response = await request(app).get("/devices");
        expect(response.headers["content-type"]).toMatch(/json/);
    });
    it("should return an array of devices", async () => {
        const response = await request(app).get("/devices");
        expect(Array.isArray(response.body)).toBe(true);
    });
});