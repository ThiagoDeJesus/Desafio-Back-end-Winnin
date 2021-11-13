import { Post } from "@src/entities/Post"

interface IPostRepository {
  createMany(posts: Post[]): Promise<Number>
  getMany(order: keyof Post): Promise<Post[]>
  getManyInRange(
    initialDate: number,
    lastDate: number,
    order: keyof Post
  ): Promise<Post[]>
}

export { IPostRepository }
