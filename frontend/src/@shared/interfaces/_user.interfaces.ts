export interface IUser {
  _id: string;
  name: string;
  email: string;
}

export interface IUserCreate {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  referenceCode: string;
  role: string;
}

export interface IUserUpdate {
  id?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  role: string;
  referenceCode: string;
}
