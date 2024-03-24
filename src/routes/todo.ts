import express, {Request, Response} from "express";
import { PrismaClient } from "@prisma/client";
import Jwt  from "jsonwebtoken";
import { userSchema, todoSchema } from "../validate";


export const todorouter = express.Router();

const prisma = new PrismaClient();

enum StatusCode{
    Success = 200,
    NotFound = 404,
    Error = 500
}
interface todoSchema{
    title: string,
    done: boolean,
    description: string
}

todorouter.post("/post", async (req: Request, res: Response)=>{
    console.log("ohyes")
    const body:todoSchema = req.body

    const {success} = todoSchema.safeParse(body)

    if(success){
        const response = await prisma.todo.create({
            data : {
              title: body.title,
              done: body.done,
              description: body.description
            }
        })
        
        return res.status(StatusCode.Success).json({
            msg: "created successfully",
            data: response
        })

    }
    else{
        return res.status(StatusCode.Error).json({
            msg: "Bad inputs"
        })
    }
})

