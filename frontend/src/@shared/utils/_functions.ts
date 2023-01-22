export class _ {
  public static appendPagination(path: string, page = 1, limit = 10) {
    return `${path}?page=${page}&limit=${limit}`;
  }

  public static isValidArray(value: any): boolean {
    return Array.isArray(value) && value.length > 0;
  }

  public static isValidObject(value: any): boolean {
    return typeof value === "object" && value !== null;
  }

  //is not empty
  public static isNotEmpty(value: any): boolean {
    return value !== null && value !== undefined && value !== "";
  }

  public static toSafeObject(value: any): any {
    if (_.isNotEmpty(value)) {
      return value;
    }
    return {};
  }

  public static isEmpty(value: any): boolean {
    return (
      value === null ||
      value === undefined ||
      value === "" ||
      (Array.isArray(value) && value.length === 0) ||
      value === "null" ||
      value === "undefined"
    );
  }

  public static toCleanObject(obj: { [key: string]: any }): any {
    if (_.isValidObject(obj)) {
      Object.keys(obj).forEach((key) => {
        if (_.isEmpty(obj[key])) {
          delete obj[key];
        }
      });
    }
    return _.toSafeObject(obj);
  }

  // params query normalize to url query
  public static toQueryString(params: any): string {
    if (_.isValidObject(params)) {
      return Object.keys(params)
        .map((key) => {
          return key + "=" + params[key];
        })
        .join("&");
    }
    return "";
  }
}
