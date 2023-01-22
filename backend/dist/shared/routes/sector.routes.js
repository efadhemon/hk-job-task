"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sector_controller_1 = __importDefault(require("../../modules/sector/sector.controller"));
var sectorRouter = express_1.default.Router();
// sector routes
sectorRouter.post("/", sector_controller_1.default.create);
sectorRouter.get("/", sector_controller_1.default.get);
sectorRouter.get("/:id", sector_controller_1.default.getById);
sectorRouter.patch("/:id", sector_controller_1.default.updateById);
sectorRouter.delete("/:id", sector_controller_1.default.deleteById);
exports.default = sectorRouter;
