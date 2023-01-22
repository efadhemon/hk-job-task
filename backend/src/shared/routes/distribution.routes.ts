import express from "express";
import distributionController from "../../modules/distribution/distribution.controller";

const distributionRouter = express.Router();

distributionRouter.post("/", distributionController.create);
distributionRouter.get("/", distributionController.get);
distributionRouter.get("/:id", distributionController.getById);
distributionRouter.put("/:id", distributionController.updateById);
distributionRouter.delete("/:id", distributionController.deleteById);

export default distributionRouter;
