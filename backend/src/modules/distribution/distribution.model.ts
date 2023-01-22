import IDistribution from "./distribution.interface";

import mongoose from "mongoose";
const { Schema } = mongoose;

const distributionSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    sector: {
      type: mongoose.Types.ObjectId,
      ref: "Sector",
      required: true,
    },
    termsCondition: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const Distribution = mongoose.model<IDistribution>(
  "Distribution",
  distributionSchema
);
export default Distribution;
