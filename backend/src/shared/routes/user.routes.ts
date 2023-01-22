import express from "express";
import userController from "../../modules/user/user.controller";

const userRouter = express.Router();

// user routes
userRouter.post("/", userController.create);
userRouter.get("/", userController.get);
userRouter.get("/:id", userController.getById);
userRouter.put("/:id", userController.updateById);
userRouter.delete("/:id", userController.deleteById);

export default userRouter;
