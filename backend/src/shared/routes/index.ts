import express, { Request, Response } from "express";

const indexRouter = express.Router();

indexRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome, Your app is working");
});

export default indexRouter;
