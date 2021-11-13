import request from "supertest"
import { app } from "@src/app"

import { PostController } from "@src/modules/Post/PostController"
import { IPostRepository } from "@src/repositories/Post/IPostRepository"
import { PostService } from "@src/modules/Post/PostService"
import { PrismaPostRepository } from "@src/repositories/Post/PrismaPostRepository"

describe("Post Controller", () => {
  let postRepository: IPostRepository
  let postService: PostService
  let postController: PostController

  beforeAll(() => {
    const postRepository = new PrismaPostRepository()
    const postService = new PostService(postRepository)
    const postController = new PostController(postService)
  })

  it("should return an http 200 when get posts", async () => {
    const res = await request(app).get("/posts")

    expect(res.status).toEqual(200)
  })
})
