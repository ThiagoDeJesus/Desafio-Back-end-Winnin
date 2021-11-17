import { Router } from "express"

import { PostControllerFactory } from "./modules/Post/CreatePostFactory"

const router = Router()

router.get("/", (req, res) => {
  res.redirect("/api-docs")
})

router.get("/posts", (req, res) => PostControllerFactory().getPosts(req, res))

router.get("/posts-in-range", (req, res) =>
  PostControllerFactory().getPostsInRange(req, res)
)

export { router }
