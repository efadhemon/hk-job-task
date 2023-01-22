"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = __importDefault(require("../config/config"));
var dbUrl = config_1.default.db.uri;
if (!dbUrl) {
    console.log("Mongo url is not set in env file or config.js", dbUrl);
    new Error("Mongo url is not set in env file or config.js");
}
mongoose_1.default.connect(dbUrl, {
// useNewUrlParser: true,
// useUnifiedTopology: true,
// useFindAndModify: false,
// useCreateIndex: true,
// strictQuery: false,
}, function (error) {
    if (error) {
        console.log("Filled to connect database. ".concat(error));
    }
    else {
        console.log("Connected to database");
    }
});
module.exports = mongoose_1.default;
