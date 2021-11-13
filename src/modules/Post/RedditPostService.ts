import axios from "axios"

import { PostService } from "./PostService"

export interface Post {
  data: {
    id?: number
    title: string
    author: string
    created_utc: number
    ups: number
    num_comments: number
  }
}

interface Response {
  data: {
    data: {
      after: string
      children: Post[]
      before: string
    }
  }
}

export class RedditPostService {
  constructor(private postsService: PostService) {}

  async GetHotPostsFromSubreddit(subreddit: string) {
    let after: string | undefined | null = undefined
    let count: number = 0
    const posts: Post["data"][] = []

    while (after !== null) {
      const { data }: Response = await axios.get(
        `https://api.reddit.com/r/${subreddit}/hot?limit=100${
          after ? "&after=" + after : ""
        }`
      )
      const newPosts = data.data.children.map((post) => {
        return {
          title: post.data.title,
          author: post.data.author,
          created_utc: post.data.created_utc,
          ups: post.data.ups,
          num_comments: post.data.num_comments,
        }
      })

      count += newPosts.length
      after = data.data.after
      posts.push(...newPosts)
    }

    const response = {
      count,
      posts,
      after: after,
    }

    return response
  }

  getAndSavePostsWithInterval(subreddit: string, interval: number) {
    const intervalRegister = setInterval(async () => {
      const { posts } = await this.GetHotPostsFromSubreddit(subreddit)

      await this.postsService.createMany(posts)
    }, interval)

    return intervalRegister
  }
}
