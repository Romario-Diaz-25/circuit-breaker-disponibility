import { Request, Response, Router } from "express";
import { CarService } from "../services/excecutor.service";

export class CarController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes(): void {
    this.router.route("/").get(this.getCars);
  }

  public async getCars(req: Request, res: Response) {
    const result = await CarService.getCars();
    res.json(result);
  }
}

export const routes = new CarController().router;
