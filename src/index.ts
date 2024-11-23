import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import dotenv from "dotenv";

import { connectDB } from "./config/database";

dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(
  cors({
    origin: "http://localhost:5173",
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Disposition"],
    preflightContinue: true,
    methods: "*",
    credentials: true,
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: "50mb",
  })
);


(async () => {
    try {
      await connectDB();
      app.listen(process.env.PORT, () => {
        console.log(`Application is running on port ${process.env.PORT}`);
      });    
    } catch (error) {
      console.log(error);
    }
  })();
  