import express, {Application, Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

import { secret } from "./config";

export default function authMiddleware(req:Request, res:Response, next:NextFunction){
    const authHeaders = req.headers['authorization']

    if(!authHeaders && !authHeaders?.startsWith('Bearer ')){
        res.status(404).json({
            msg: "You've sent wrong credential",
        })
    }

    const token:any = authHeaders?.split(' ')[1]

    try{
        const decoded = jwt.verify(token, secret)

        next()

    }catch(err){
        return res.status(404).json({
            msg: "bad request"
        })
    }
    
}