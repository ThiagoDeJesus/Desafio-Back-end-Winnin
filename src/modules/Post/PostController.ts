import { Request, Response } from "express"
import { PostService } from "./PostService"

class PostController {
  constructor(private postService: PostService) {}

  async getPosts(req: Request, res: Response) {
    const { order } = req.query

    try {
      const posts = await this.postService.getAll(String(order))

      return res.status(200).json({ posts })
    } catch (err: any) {
      return res.status(400).json({ error: err.message })
    }
  }

  async getPostsInRange(req: Request, res: Response) {
    const { initialDate, finalDate, order } = req.query

    try {
      const posts = await this.postService.getAllInRange(
        String(initialDate),
        String(finalDate),
        String(order)
      )

      return res.status(200).json({ posts })
    } catch (err: any) {
      return res.status(400).json({ error: err.message })
    }
  }
}

export { PostController }
