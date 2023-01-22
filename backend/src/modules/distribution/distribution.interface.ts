import { Document } from "mongoose";
import ISector from "../sector/sector.interface";
import IUser from "../user/user.interface";

export default interface IDistribution extends Document {
  name: string;
  user: IUser;
  sector: ISector;
  termsCondition: boolean;
}
