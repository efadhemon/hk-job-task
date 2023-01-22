import mongoose from "mongoose";
import ISector from "./sector.interface";
const { Schema } = mongoose;

const sectorSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const Sector = mongoose.model<ISector>("Sector", sectorSchema);
export default Sector;
