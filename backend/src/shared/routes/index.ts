import express, { Request, Response } from "express";
import authRouter from "./auth.routes";
import userRouter from "./user.routes";

const indexRouter = express.Router();

indexRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome, Your app is working");
});

indexRouter.use("/auth", authRouter);
indexRouter.use("/user", userRouter);

export default indexRouter;
