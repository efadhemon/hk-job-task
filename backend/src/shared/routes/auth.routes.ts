import express from "express";
import authController from "../../modules/auth/auth.controller";

const authRouter = express.Router();

// auth routes
authRouter.post("/register", authController.userResister);
authRouter.post("/login", authController.userLogin);

export default authRouter;
