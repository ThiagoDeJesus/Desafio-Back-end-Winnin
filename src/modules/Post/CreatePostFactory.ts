import { PostController } from "@src/modules/Post/PostController"
import { PostService } from "@src/modules/Post/PostService"
import { PrismaPostRepository } from "@src/repositories/Post/PrismaPostRepository"

export const PostControllerFactory = () => {
  const postRepository = new PrismaPostRepository()
  const postService = new PostService(postRepository)
  const postController = new PostController(postService)
  return postController
}
