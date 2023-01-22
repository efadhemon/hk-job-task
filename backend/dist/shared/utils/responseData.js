"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageHandler = exports.responseData = void 0;
var responseData = function (_a) {
    var req = _a.req, res = _a.res, data = _a.data, error = _a.error, status = _a.status;
    var page = req.query.page;
    var take = req.query.take;
    var method = req.method;
    if (page && take && Array.isArray(data)) {
        var startIndex = (page - 1) * take;
        var endIndex = page * take;
        return res.status(status || 200).json({
            success: true,
            message: (0, exports.messageHandler)(method),
            total: data.length,
            payload: data.slice(startIndex, endIndex),
            page: page,
            take: take,
        });
    }
    else if (data) {
        return res.status(status || 200).json({
            success: true,
            message: (0, exports.messageHandler)(method),
            total: Array.isArray(data) ? data.length : 1,
            payload: data,
        });
    }
    else if (error) {
        console.log(error);
        return res.status(status || 401).json({
            success: false,
            message: error.message,
            payload: null,
        });
    }
    else {
        return res.status(status || 401).json({
            success: false,
            message: "No data",
            payload: null,
        });
    }
};
exports.responseData = responseData;
var messageHandler = function (method) {
    switch (method.toLowerCase()) {
        case "get":
            return "successfully get";
            break;
        case "post":
            return "created successfully";
            break;
        case "put":
        case "patch":
            return "updated successfully";
            break;
        case "delete":
            return "deleted successfully";
            break;
        default:
            return "operations successful";
    }
};
exports.messageHandler = messageHandler;
