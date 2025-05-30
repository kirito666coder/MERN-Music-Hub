
import cors from "cors"
import morgan from "morgan"
import express from "express"

const app = express()

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(morgan("dev"))

app.use(express.json())
app.use(express.urlencoded({extended:true}))


export default app;