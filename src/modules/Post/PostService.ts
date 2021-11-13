import { IPost } from "@src/entities/Post"
import { convertStringToDate, getTimestamp } from "@src/helpers"
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

    const posts = this.postRepository.getMany(parsedOrder)
    return posts
  }

  async getAllInRange(
    initialDate: string,
    finalDate: string,
    order: string
  ): Promise<IPost[]> {
    let parsedOrder: "ups" | "num_comments" = "ups"

    if (order === "comments") {
      parsedOrder = "num_comments"
    }

    const initialDateParsed = convertStringToDate(initialDate)
    const finalDateParsed = convertStringToDate(finalDate, "end")

    const posts = await this.postRepository.getManyInRange(
      getTimestamp(initialDateParsed),
      getTimestamp(finalDateParsed),
      parsedOrder
    )

    return posts
  }
}

export { PostService }
