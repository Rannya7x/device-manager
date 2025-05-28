import request from "supertest";
import app from "../../../src/app.js";
import db from "../../../db.js"

describe("Devices API", () => {
    afterAll(async () => {
        await db.end();
    });
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
    describe("POST /devices", () => {
        it("should create a new device with valid data", async () => {
            const testDevice = {
                category_id: 1,
                color: "testColor",
                part_number: 123456
            };
            const response = await request(app)
                .post("/devices")
                .send(testDevice);           
            expect(response.status).toBe(201);
            expect(response.body).toMatchObject({
                id: expect.any(Number),
                ...testDevice,
                created_at: expect.any(String),
                updated_at: expect.any(String)
            })
        });
        it("should return 400 for invalid data", async () => {
            const invalidDevice = {
                category_id: "invalid",
                color: 123,
                part_number: "notANumber"
            };
            const response = await request(app)
                .post("/devices")
                .send(invalidDevice);       
            expect(response.status).toBe(400);
        });
        it("should return 400 for missing required fields", async () => {
            const incompleteDevice = {
                color: "testColor"
            };
            const response = await request(app)
                .post("/devices")
                .send(incompleteDevice);        
            expect(response.status).toBe(400);
            expect(response.body.error).toMatch(/Missing required fields/i);
        });
    });

    describe("DELETE /devices/:id", () => {
        let testDeviceId;
        beforeEach(async () => {
            const testDevice = {
                category_id: 1,
                color: "testColor",
                part_number: 123456
            }
            const response = await request(app)
                .post("/devices")
                .send(testDevice);
            testDeviceId = response.body.id;
        });
        it("should delete an existing device and return 200", async () => {
            const response = await request(app).delete(`/devices/${testDeviceId}`);

            expect(response.status).toBe(200);
            expect(response.body).toMatchObject({
                message: expect.any(String),
                deletedId: testDeviceId
            });
        });
        it("should return 404 when device is actually deleted from database", async () => {
            await request(app).delete(`devices/${testDeviceId}`);

            const response = await request(app).get(`/devices/${testDeviceId}`);

            expect(response.status).toBe(404);
        });
        it("should return 404 for non-existent device", async () => {
            const nonExistentId = 999999;
            const response = await request(app).delete(`devices/${nonExistentId}`);

            expect(response.status).toBe(404);
            expect(response.body.error).toMatch(/Device not found/i);
        });
        it("should return 400 for invalid ID format or type", async () => {
            const response = await request(app).delete("devices/invalidId");

            expect(response.status).toBe(400);
            expect(response.body.error).toMatch(/Invalid ID format/i);
        });
    });
});