import request from "supertest"
import { app } from "./app"

describe("Route testing", () => {
  it('Should return an http 200 and a "message" property (route: GET /)', async () => {
    const res = await request(app).get("/")

    expect(res.status).toEqual(200)
    expect(res.body).toHaveProperty("message")
  })

  it('Should return an http 404 and a "message" property equal to "Page Not Found" (route: GET /RandomRoute)', async () => {
    const res = await request(app).get("/RandomRoute")

    expect(res.status).toEqual(404)
    expect(res.body).toHaveProperty("message")
    expect(res.body.message).toEqual("Page Not Found")
  })
})
