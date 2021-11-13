import { PostService } from "./PostService"
import { RedditPostService, Post } from "./RedditPostService"
import { PrismaPostRepository } from "@src/repositories/Post/PrismaPostRepository"
import { IPostRepository } from "@src/repositories/Post/IPostRepository"

describe("Save Posts from Reddit", () => {
  let postRepository: IPostRepository
  let postService: PostService
  let redditPostService: RedditPostService

  beforeAll(() => {
    postRepository = new PrismaPostRepository()
    postService = new PostService(postRepository)
    redditPostService = new RedditPostService(postService)
  })

  it(
    "Should be able to get all daily hot posts from subreddit",
    async () => {
      const postSample: Post["data"] = {
        author: expect.any(String),
        created_utc: expect.any(Number),
        num_comments: expect.any(Number),
        title: expect.any(String),
        ups: expect.any(Number),
      }

      const { posts, after, count } =
        await redditPostService.GetHotPostsFromSubreddit("artificial")
      const post = posts[0]

      expect(post).toMatchObject(postSample)
      expect(after).toBeNull()
      expect(count).toEqual(posts.length)
    },
    1000 * 60
  )
})
