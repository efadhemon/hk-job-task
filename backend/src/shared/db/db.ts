import mongoose from "mongoose";
import config from "../config/config";

const dbUrl = config.bd.uri;

if (!dbUrl) {
    console.log("Mongo url is not set in env file or config.js", dbUrl);
    new Error("Mongo url is not set in env file or config.js");
}

mongoose.connect(
    dbUrl,
    {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useFindAndModify: false,
        // useCreateIndex: true,
    },
    (error) => {
        if (error) {
            console.log(`Filled to connect database. ${error}`);
        } else {
            console.log("Connected to database");
        }
    }
);

module.exports = mongoose;
