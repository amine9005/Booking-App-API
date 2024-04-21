import dotenv from "dotenv";

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || "5500";
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017";

export const config = {
  server: {
    port: SERVER_PORT,
  },
  mongo: {
    url: MONGO_URL,
  },
};
