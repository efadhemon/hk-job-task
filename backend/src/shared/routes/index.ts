import express, { Request, Response } from "express";
import distributionRouter from "./distribution.routes";
import sectorRouter from "./sector.routes";

const indexRouter = express.Router();

indexRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome, Your app is working");
});

indexRouter.use("/sectors", sectorRouter);
indexRouter.use("/distributions", distributionRouter);

export default indexRouter;
