import express from "express"

import { todorouter } from "./todo"

import {userRouter} from "./user"

export const router = express.Router()

router.use("/user", userRouter)

router.use("/todo", todorouter)


