import { Document } from "mongoose";
import ISector from "../sector/sector.interface";

export default interface IDistribution extends Document {
  name: string;
  sectors: ISector[];
  agreeToTerms: boolean;
}
