"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseData = void 0;
var responseData = function (data, req) {
    var page = req.query.page;
    var limit = req.query.limit;
    var method = req.method;
    if (page && limit) {
        var startIndex = (page - 1) * limit;
        var endIndex = page * limit;
        return {
            success: true,
            message: messageHandler(method),
            total: data.length,
            payload: data.slice(startIndex, endIndex),
            page: page,
            limit: limit,
        };
    }
    else {
        return {
            success: true,
            message: messageHandler(method),
            total: Array.isArray(data) ? data.length : 1,
            payload: data,
        };
    }
};
exports.responseData = responseData;
var messageHandler = function (method) {
    switch (method.toLowerCase()) {
        case "get":
            return "Successfully get";
            break;
        case "post":
            return "Created successfully";
            break;
        case "put":
        case "patch":
            return "Updated successfully";
            break;
        case "delete":
            return "Deleted successfully";
            break;
        default:
            return "Operations successful";
    }
};
