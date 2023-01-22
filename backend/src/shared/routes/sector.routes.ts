import express from "express";
import sectorController from "../../modules/sector/sector.controller";

const sectorRouter = express.Router();

// sector routes
sectorRouter.post("/", sectorController.create);
sectorRouter.get("/", sectorController.get);
sectorRouter.get("/:id", sectorController.getById);
sectorRouter.put("/:id", sectorController.updateById);
sectorRouter.delete("/:id", sectorController.deleteById);

export default sectorRouter;
