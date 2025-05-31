
import "dotenv/config"
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import cors from "cors"
import morgan from "morgan"
import express from "express"
import { ConnectDB } from "./db/db.js"
import compression from "compression"
import cookieParser from "cookie-parser"

ConnectDB()

const app = express()

app.use(helmet())
app.use(rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 100,
    message:"Too many requests from this IP, please try again later."
}))
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(morgan("dev"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression())
app.use(cookieParser())

app.get('/health',(req,res)=>{
    res.status(200).json({
        status:"OK",
        message:"Server is running!"
    })
})

export default app;