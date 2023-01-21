import { Request, Response } from "express";

interface IFResponseData {
    req: Request;
    res: Response;
    data?: any;
    error?: Error | any;
    status?: number;
}

export const responseData = ({
    req,
    res,
    data,
    error,
    status,
}: IFResponseData) => {
    const page: any = req.query.page;
    const take: any = req.query.take;
    const method = req.method;

    if (page && take && Array.isArray(data)) {
        const startIndex = (page - 1) * take;
        const endIndex = page * take;
        return res.status(status || 200).json({
            success: true,
            message: messageHandler(method),
            total: data.length,
            payload: data.slice(startIndex, endIndex),
            page: page,
            take: take,
        });
    } else if (data) {
        return res.status(status || 200).json({
            success: true,
            message: messageHandler(method),
            total: Array.isArray(data) ? data.length : 1,
            payload: data,
        });
    } else if (error) {
        console.log(error);
        return res.status(status || 401).json({
            success: false,
            message: error.message,
            payload: null,
        });
    } else {
        return res.status(status || 401).json({
            success: false,
            message: "No data",
            payload: null,
        });
    }
};

export const messageHandler = (method: any) => {
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
