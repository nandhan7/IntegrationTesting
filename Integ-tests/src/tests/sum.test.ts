import { describe, expect, it,beforeEach } from "vitest";
import { app } from "..";
import request from "supertest";
import resetDb from "./helpers/reset-db";
describe("POST /sum", () => {
    beforeEach(async () => { //Before each test runs clear Db
        console.log("clearing db");
        await resetDb();
    });
    it("should sum add 2 numbers", async () => {
        const { status, body } = await request(app).post('/sum').send({
            a: 1,
            b: 2
        })
        expect(status).toBe(200);
        expect(body).toEqual({ answer: 3, id: expect.any(Number) });
    });
    it("should sum add 2 numbers", async () => {
        const { status, body } = await request(app).post('/sum').send({
            a: 1,
            b: 2
        })
        expect(status).toBe(200);
        expect(body).toEqual({ answer: 3, id: expect.any(Number) });
    });
})