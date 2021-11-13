import "dotenv/config"

import swaggerUi from "swagger-ui-express"
import express, { Errback, NextFunction, Request, Response } from "express"
import cors from "cors"
import schedule from "node-schedule"
import { router } from "@src/routes"

import { PrismaPostRepository } from "./repositories/Post/PrismaPostRepository"
import { PostService } from "./modules/Post/PostService"
import { RedditPostService } from "@src/modules/Post/RedditPostService"

import swaggerDocs from "./swagger.json"

const app = express()
app.use(cors())
app.use(express.json())

app.use(router)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

const postRepository = new PrismaPostRepository()
const postService = new PostService(postRepository)
const redditPostService = new RedditPostService(postService)
const job = schedule.scheduleJob("* * 0 * * *", () => {
  redditPostService.getAndSavePostsWithInterval("artificial")
})

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: "Page Not Found" })
})

export { app }
