import { Prisma } from "@prisma/client"
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

  async getMany(order: keyof Post): Promise<Post[]> {
    const posts = await prisma.post.findMany({
      orderBy: {
        [order]: "desc",
      },
    })

    return posts
  }

  async getManyInRange(
    initialDate: number,
    lastDate: number,
    order: keyof Post
  ): Promise<Post[]> {
    const posts = await prisma.post.findMany({
      where: {
        AND: [
          {
            created_utc: {
              lte: lastDate,
            },
          },
          {
            created_utc: {
              gte: initialDate,
            },
          },
        ],
      },
      orderBy: {
        [order]: "desc",
      },
    })
    return posts
  }
}

export { PrismaPostRepository }
