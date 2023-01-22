import moment, { Moment } from 'moment';
import jwtDecode from 'jwt-decode';

export class _ {
  public static appendPagination(path: string, page = 1, limit = 10) {
    return `${path}?page=${page}&limit=${limit}`;
  }

  public static getStutteredDate(date: string | Moment | Date) {
    return moment(date).format('YYYY-MM-DD HH:MM:SS');
  }

  public static jwtDecodeFunction(code: string) {
    return jwtDecode(code);
  }

  public static isJwtExpired(tokens: number): boolean {
    const date: Date = new Date(tokens * 1000);
    const parsedDate = Date.parse(date.toString());
    if (parsedDate - Date.now() > 0) {
      return false;
    } else {
      return true;
    }
  }

  public static getSerializeData(data: any[]) {
    const serializeData = data?.sort((a, b) => a.serial - b.serial);
    return serializeData;
  }

  static isNullOrUndefined(value: any): boolean {
    return value === null || value === undefined;
  }

  public static isValidArray(value: any): boolean {
    return Array.isArray(value) && value.length > 0;
  }

  public static isValidObject(value: any): boolean {
    return typeof value === 'object' && value !== null;
  }

  public static toSafeValue(value: any): any {
    if (_.isNotEmpty(value)) {
      return value;
    }
    return '';
  }

  public static randomString(
    length: number,
    type: 'lower' | 'upper' | 'numeric'
  ): string {
    let result = '';
    const characters =
      type === 'lower'
        ? 'abcdefghijklmnopqrstuvwxyz'
        : type === 'upper'
        ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        : type === 'numeric'
        ? '0123456789'
        : 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  public static isValidString(value: any): boolean {
    return typeof value === 'string' && value.length > 0;
  }

  public static isValidNumber(value: any): boolean {
    return typeof value === 'number' && !isNaN(value);
  }

  public static isValidBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }

  //is not empty
  public static isNotEmpty(value: any): boolean {
    return value !== null && value !== undefined && value !== '';
  }

  public static toNumber(value: any): number {
    return Number(value);
  }

  //safety convert to number
  public static toSafeNumber(value: any): number {
    if (_.isNotEmpty(value)) {
      return Number(value);
    }
    return 0;
  }

  //safety convert to string
  public static toSafeString(value: any): string {
    if (_.isNotEmpty(value)) {
      return value.toString();
    }
    return '';
  }

  public static toSafeObject(value: any): any {
    if (_.isNotEmpty(value)) {
      return value;
    }
    return {};
  }

  //safety convert to boolean
  public static toBooleanSafe(value: any): boolean {
    if (_.isNotEmpty(value)) {
      return value.toString() === 'true';
    }
    return false;
  }

  public static findMax(array: number[]): number {
    return Math.max.apply(Math, array);
  }

  public static findMin(array: number[]): number {
    return Math.min.apply(Math, array);
  }

  public static findAverage(array: number[]): number {
    let sum = 0;
    for (const value of array) {
      sum += value;
    }
    return sum / array.length;
  }

  public static findMedian(array: number[]): number {
    const sorted = array.sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0
      ? sorted[mid]
      : (sorted[mid - 1] + sorted[mid]) / 2;
  }

  public static isEmpty(value: any): boolean {
    return (
      value === null ||
      value === undefined ||
      value === '' ||
      (Array.isArray(value) && value.length === 0) ||
      value === 'null' ||
      value === 'undefined'
    );
  }

  //to safe array
  public static toSafeArray(value: any): any[] {
    if (_.isNotEmpty(value)) {
      return value;
    }
    return [];
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
          return key + '=' + params[key];
        })
        .join('&');
    }
    return '';
  }

  public static queryNormalizer = (options: any) => {
    const pureOption = _.toCleanObject(options);

    if (pureOption?.query) {
      return options.query;
    }
    const queries = [];
    Object.entries(pureOption).map(([key, value]: any) => {
      const valueType = Array.isArray(value) ? 'array' : typeof value;
      if (valueType === 'array' || key === 'filter' || key === 'sort') {
        return value.map((fOption) => {
          return queries.push(`${key}=${fOption}`);
        });
      } else if (valueType === 'object') {
        return queries.push(`${key}=${JSON.stringify(value)}`);
      } else {
        return queries.push(`${key}=${value}`);
      }
    });
    return queries.join('&');

    //   if (options?.query) {
    //     return options.query;
    //   }
    //   if (options) {
    //     const items = {};
    //     Object.keys(options).map((x) => {
    //       if (Boolean(options[x])) {
    //         items[x] = options[x];
    //       }
    //     });
    //     return Object.keys(items)
    //       .map((x) => {
    //         const propertyName = x;
    //         const propertyValue = items[x];
    //         const propertyValueType = typeof items[x];
    //         if (propertyValueType === 'object') {
    //           return `${propertyName}=${JSON.stringify(propertyValue)}`;
    //         } else {
    //           return `${propertyName}=${propertyValue}`;
    //         }
    //       })
    //       .join('&');
    //   }

    //   return '';
    // };

    // public static getNestedObjectValueInArray = (obj: any) => {
    //   return Object.values(_.toSafeObject(obj))?.map((x) => {
    //     if (typeof x === 'object') {
    //       return _.getNestedObjectValueInArray(x);
    //     } else {
    //       return x;
    //     }
    //   });
  };

  // is valid browser url
  public static isValidBrowserUrl(url: string): boolean {
    // check is string
    if (typeof url !== 'string') {
      return false;
    }
    return url?.startsWith('http://') || url?.startsWith('https://');
  }

  // check url ending extension
  public static isValidSvgUrl(url: string): boolean {
    // check is string
    if (typeof url !== 'string') {
      return false;
    }
    return url?.toLocaleLowerCase()?.endsWith('.svg');
  }

  // get url extension
  public static getUrlExtension(url: string): string {
    if (_.isValidBrowserUrl(url)) {
      return url.split('.').pop();
    }
    return '';
  }

  // check is svg url
  public static isSvgUrl(url: string): boolean {
    if (_.isValidBrowserUrl(url)) {
      return _.getUrlExtension(url)?.toLocaleLowerCase() === 'svg';
    }
    return false;
  }

  // amount prefix with currency symbol
  public static amountPrefixWithCurrencySymbol = (
    amount: number,
    currencySymbol: string = '৳'
  ): string => {
    return currencySymbol + _.toSafeNumber(amount);
  };

  // purify data if json stringfy object
  public static jsonParser = (data: any): any => {
    const r = _.isJsonString(data);
    return r ? JSON.parse(data) : data;
  };

  // is json string
  public static isJsonString = (str: string): boolean => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  // clean svg code from xml version tag
  public static cleanSvgCode = (svgCode: string): string => {
    return svgCode.replace(/<\?xml[^>]*>/g, '');
  };

  // get month end date from date
  public static getMonthEndDate = (date: Date | Moment): Date => {
    return moment(date).endOf('month').toDate();
  };

  // get ago
  public static getAgo = (date: Date | Moment): string => {
    return moment(date).fromNow();
  };

  // get age
  public static getAge = (date: Date | Moment | string) => {
    return moment().diff(date, 'years');
  };

  public static orderStatusBgColorGen = (status: string) => {
    switch (status) {
      case 'PLACED':
        return '#FFA500';
      case 'CONFIRMED':
        return '#2CADD6';
      case 'COMPLETED':
        return '#00AC26';
      case 'CANCELED':
        return '#D62C2C';
      default:
        return '#00AC26';
    }
  };
}
