"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var distributionSchema = new Schema({
    name: {
        type: String,
        required: false,
    },
    sectors: [
        {
            type: mongoose_1.default.Types.ObjectId,
            ref: "Sector",
            required: true,
        },
    ],
    agreeToTerms: {
        type: Boolean,
        required: true,
    },
}, {
    timestamps: false,
    versionKey: false,
});
var Distribution = mongoose_1.default.model("Distribution", distributionSchema);
exports.default = Distribution;
