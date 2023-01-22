import express, { Request, Response } from "express";
import authRouter from "./auth.routes";
import distributionRouter from "./distribution.routes";
import sectorRouter from "./sector.routes";
import userRouter from "./user.routes";

const indexRouter = express.Router();

indexRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome, Your app is working");
});

indexRouter.use("/auth", authRouter);
indexRouter.use("/users", userRouter);
indexRouter.use("/sectors", sectorRouter);
indexRouter.use("/distributions", distributionRouter);

export default indexRouter;
