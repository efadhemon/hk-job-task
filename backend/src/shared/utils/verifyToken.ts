import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";
import config from "../config/config";

const verify = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("auth-token");
    if (!token) return res.status(401).send("Access Denied");

    try {
        const verified = jwt.verify(token, config.token.secret);
        // req.accepted = verified;
        next();
    } catch (err) {
        res.status(401).send("Invalid Token");
    }
};

module.exports.verify = verify;
