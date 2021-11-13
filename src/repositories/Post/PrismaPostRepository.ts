import prisma from "@src/database/client"
import { Post } from "@src/entities/Post"
import { IPostRepository } from "./IPostRepository"

class PrismaPostRepository implements IPostRepository {
  async createMany(posts: Post[]): Promise<number> {
    const postsResponse = await prisma.post.createMany({
      data: posts,
    })

    return postsResponse.count
  }
}

export { PrismaPostRepository }
