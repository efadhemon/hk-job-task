"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var config = {
    db: {
        uri: process.env.DB_URI || "mongodb://localhost:5000/",
    },
    server: {
        port: process.env.PORT || 5000,
    },
};
exports.default = config;
