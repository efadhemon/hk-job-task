import mongoose from "mongoose";
import IUser from "./user.interface";
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: false,
        },
        image: {
            type: String,
            required: false,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: false,
        },
        password: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: false,
        },
        address: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const User = mongoose.model<IUser>("User", userSchema);
export default User;
