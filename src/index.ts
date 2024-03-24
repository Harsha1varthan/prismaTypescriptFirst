import dotenv from 'dotenv'
import express, {Application,Request, Response} from "express"
import {router} from "./routes/index"

dotenv.config()

const PORT = 4000
const app: Application = express()

app.use(express.json())

app.use("/api/v1", router)

app.listen(PORT, ()=>{
    console.log(`your app is listening at ${PORT}`)
})

