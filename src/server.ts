import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import { routes } from "./controller/excecutor.controller";

class Server {
  public app: Application;

  constructor() {
    this.app = express();

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    this.app.use(cors({ origin: "*" }));
    this.app.use(morgan("dev"));

    this.app.use("/", routes);
  }
}

export const server = new Server().app;
