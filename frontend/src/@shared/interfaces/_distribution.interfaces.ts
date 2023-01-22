import { ISector } from "./_sector.interfaces";
import { IUser } from "./_user.interfaces";

export interface IDistribution {
  _id: string;
  name: string;
  user: IUser;
  Sector: ISector;
  termsCondition: string;
}

export interface IDistributionCreate {
  name: string;
  user: string;
  Sector: string;
  termsCondition: string;
}

export interface IDistributionUpdate {
  id?: string;
  name: string;
  user: string;
  Sector: string;
  termsCondition: string;
}
