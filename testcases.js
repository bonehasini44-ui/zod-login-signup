const request = require('supertest');
const app = require('../app');

describe("POST /register", () => {

    it("should register with valid data", async () => {
        const res = await request(app)
            .post("/register")
            .send({
                name: "Hasini",
                email: "hasini@gmail.com",
                password: "secret123"
            });
        expect(res.status).toBe(201);
    });

    it("should reject invalid email", async () => {
          const res = await request(app)
            .post("/register")
            .send({name: "Hasini",
              email: "abc",
              password: "secret123"
            });
      
          expect(res.status).toBe(400);
        });
});