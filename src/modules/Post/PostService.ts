import { IPost } from "@src/entities/Post"
import { IPostRepository } from "@src/repositories/Post/IPostRepository"

class PostService {
  constructor(private postRepository: IPostRepository) {}

  async createMany(posts: IPost[]): Promise<Number> {
    const postCount = await this.postRepository.createMany(posts)

    return postCount
  }

  async getAll(order: string): Promise<IPost[]> {
    let parsedOrder: "ups" | "num_comments" = "ups"
    if (order === "comments") {
      parsedOrder = "num_comments"
    }

    console.log(parsedOrder)
    const posts = this.postRepository.getMany(parsedOrder)
    return posts
  }
}

export { PostService }
