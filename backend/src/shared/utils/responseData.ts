import { Request } from "express";

export const responseData = (data: any, req: Request) => {
  const page: any = req.query.page;
  const limit: any = req.query.limit;
  const method = req.method;

  if (page && limit) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    return {
      success: true,
      message: messageHandler(method),
      total: data.length,
      payload: data.slice(startIndex, endIndex),
      page: page,
      limit: limit,
    };
  } else {
    return {
      success: true,
      message: messageHandler(method),
      total: Array.isArray(data) ? data.length : 1,
      payload: data,
    };
  }
};

const messageHandler = (method: any) => {
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
