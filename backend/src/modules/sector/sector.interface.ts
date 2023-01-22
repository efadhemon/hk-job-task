import { Document } from "mongoose";

export default interface ISector extends Document {
  title: string;
  isActive: boolean;
}
