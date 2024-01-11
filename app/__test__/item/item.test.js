import supertest from "supertest";
import testServer from "../../lib/testServer";

const app = testServer();
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc4NGNiOTcyLTczNGQtNDQ2MS05ZDE1LTM0ZGRhYzhjNGE2ZCIsImlhdCI6MTcwNDk3Nzk4MiwiZXhwIjoxNzA0OTg4NzgyfQ.IEVHWn8_izVzN6vYiw_uVhQ6B94Q3R7qGFpqe-r0Nuc";

describe("Item Controller", () => {
  describe("Get Items", () => {
    it("should return a list of items", async () => {
      const response = await supertest(app).get("/api/items").set("Authorization", token).expect(200);

      expect(response.body.status).toBe(200);
    });
  });

  describe("Create Item", () => {
    it("should create a new item", async () => {
      const newItem = {
        name: "New Test Item",
        points: 10,
        total: 100,
      };

      const response = await supertest(app).post("/api/items").set("Authorization", token).send(newItem).expect(201);

      expect(response.body.status).toBe(201);
    });
  });

  describe("Update Item", () => {
    it("should update an existing item", async () => {
      const existingItem = {
        name: "Existing Item",
        points: 5,
        total: 50,
      };

      const updatedItem = {
        name: "Updated Item",
        points: 8,
        total: 80,
      };

      const createResponse = await supertest(app).post("/api/items").set("Authorization", token).send(existingItem).expect(201);

      const itemId = createResponse.body.data.id;

      const updateResponse = await supertest(app).put(`/api/items/${itemId}`).set("Authorization", token).send(updatedItem).expect(200);

      expect(updateResponse.body.status).toBe(200);
    });
  });
});
