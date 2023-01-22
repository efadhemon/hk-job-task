"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var distribution_controller_1 = __importDefault(require("../../modules/distribution/distribution.controller"));
var distributionRouter = express_1.default.Router();
distributionRouter.post("/", distribution_controller_1.default.create);
distributionRouter.get("/", distribution_controller_1.default.get);
distributionRouter.get("/:id", distribution_controller_1.default.getById);
distributionRouter.patch("/:id", distribution_controller_1.default.updateById);
distributionRouter.delete("/:id", distribution_controller_1.default.deleteById);
exports.default = distributionRouter;
