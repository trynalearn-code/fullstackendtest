import express from "express"
import { createUserController } from "../controllers/userController.js"

const route = express.Router()

route.use(express.json())

route.post("/user", createUserController)

export default route

