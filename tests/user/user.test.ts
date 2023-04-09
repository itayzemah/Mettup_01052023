import request from "supertest";
import { createFakeApp } from "../../src/testKit/fake.app";
describe("user api", () => {
  test("starting with empty DB, adding user successfully and fetch it", async () => {
    const { app } = createFakeApp();

    await request(app).get("/user").expect(200, []);

    const newUser = {
      firstName: "Itay",
      lastName: "Zemah",
      dateOfBirth: new Date(1994, 3, 7).toDateString(),
    };
    const expectedNewUser = { id: 1, ...newUser };

    await request(app)
      .post("/user")
      .accept("application/json")
      .set("Content-Type", "application/json")
      .send(newUser)
      .expect(201, expectedNewUser);

    await request(app)
      .get("/user/1")
      .set("Content-Type", "application/json")
      .expect(200)
      .expect(expectedNewUser);

    await request(app)
      .get("/user")
      .set("Content-Type", "application/json")
      .expect(200, [expectedNewUser]);
  });
});
