import { IPost } from "@src/entities/Post"
import { IPostRepository } from "@src/repositories/Post/IPostRepository"

class PostService {
  constructor(private postRepository: IPostRepository) {}

  async createMany(posts: IPost[]) {
    const postCount = await this.postRepository.createMany(posts)

    return postCount
  }
}

export { PostService }
