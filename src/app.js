import express from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors"


const app = express();

// major middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:8000",
    credentials: true
}))

app.use(express.json({
    limit: "20kb"
}))

app.use(express.urlencoded({
    extended: true, limit: "20kb"
}))

app.use(express.static("public"));
app.use(cookieParser());

// routes import
import userRouter from './routes/user.routes.js'

// routes declaration
app.use("/users", userRouter)

export default app;