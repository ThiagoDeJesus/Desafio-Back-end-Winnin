import "dotenv/config"

import swaggerUi from "swagger-ui-express"
import express, { Errback, NextFunction, Request, Response } from "express"
import cors from "cors"
import { router } from "@src/routes"

import swaggerDocs from "./swagger.json"

const app = express()
app.use(cors())
app.use(express.json())

app.use(router)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: "Page Not Found" })
})

export { app }
