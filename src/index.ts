// src/index.js
import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { START } from "./helpers/start";

dotenv.config();

const app: Express = express();
const port = process.env.DEV_PORT || 3000;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Shoppe Express + TypeScript Server");
});

START({ app, port });
