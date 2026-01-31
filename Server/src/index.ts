import type { Request, Response } from 'express';
import express from 'express';
import authRouter from './routes/authRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import cors from 'cors';
import dotenv from "dotenv"
import http from "http";
dotenv.config()
import {connectDB} from "./config/mongoose.connect.js"
const app = express();
const PORT = process.env.PORT || 2500;
import { initSocket } from "./socket.js";



app.use(
  cors({
    origin: [
      "http://localhost:5173",
    ],
    credentials: true,
  })
);

connectDB()

app.use(express.json());

app.use((req, res, next) => {
  console.log("---- Incoming Request ----");
  console.log("Method:", req.method);
  console.log("URL:", req.originalUrl);
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  console.log("--------------------------");
  next();
});


app.use("/api/v1/auth" , authRouter)


app.use(errorHandler);

const server = http.createServer(app);
initSocket(server);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});