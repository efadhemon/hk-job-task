"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var distribution_routes_1 = __importDefault(require("./distribution.routes"));
var sector_routes_1 = __importDefault(require("./sector.routes"));
var indexRouter = express_1.default.Router();
indexRouter.get("/", function (req, res) {
    res.status(200).send("Welcome, Your app is working");
});
indexRouter.use("/sectors", sector_routes_1.default);
indexRouter.use("/distributions", distribution_routes_1.default);
exports.default = indexRouter;
