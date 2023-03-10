require("dotenv").config();

const config = {
  db: {
    uri: process.env.DB_URI || "mongodb://localhost:5000/",
  },
  server: {
    port: process.env.PORT || 5000,
  },
};

export default config;
