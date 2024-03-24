import express from "express"
import { secret } from "../config"
import jwt from "jsonwebtoken"
import { PrismaClient } from "@prisma/client"
import { userSchema } from "../validate"

interface User{
    name: string,
    password: string
}
export const userRouter = express.Router()

const prisma = new PrismaClient()

userRouter.post("/post", async(req, res)=>{
    const body: User = req.body

    const {success} = userSchema.safeParse(body)

    

    if(!success){
        return res.status(404).json({
            msg: "Bad Inputs"
        })
    }
    
    const userResponse = await prisma.user.create({
        data: {
            name: body.name,
            password: body.password
        }
    })

    const token = jwt.sign(body.name, secret)

    return res.status(200).json({
        msg: "user created",
        token: token,
        data: userResponse
    })
})


