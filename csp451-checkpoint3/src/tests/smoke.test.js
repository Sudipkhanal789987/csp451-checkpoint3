const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  test("returns status code 200", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /health", () => {
  test("returns status code 200", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toBe(200);
  });

  test("returns healthy status and uptime", async () => {
    const response = await request(app).get("/health");

    expect(response.body.status).toBe("healthy");
    expect(typeof response.body.uptime).toBe("number");
  });
});
