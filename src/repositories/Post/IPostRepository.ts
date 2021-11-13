import { Post } from "@src/entities/Post"

interface IPostRepository {
  createMany(posts: Post[]): Promise<Number>
}

export { IPostRepository }
