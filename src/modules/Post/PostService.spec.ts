import { IPost } from "@src/entities/Post"
import { PostService } from "./PostService"
import { PrismaPostRepository } from "@src/repositories/Post/PrismaPostRepository"
import { IPostRepository } from "@src/repositories/Post/IPostRepository"

describe("Create Posts", () => {
  let postRepository: IPostRepository
  let createPostsService: PostService

  beforeAll(() => {
    postRepository = new PrismaPostRepository()
    createPostsService = new PostService(postRepository)
  })

  test("should be able to create posts", async () => {
    const posts: IPost[] = [
      {
        author: "teste",
        created_utc: 123123,
        num_comments: 123,
        title: "teste",
        ups: 123,
      },
    ]

    const response = await createPostsService.createMany(posts)

    expect(response).toBeGreaterThanOrEqual(1)
  })
})
