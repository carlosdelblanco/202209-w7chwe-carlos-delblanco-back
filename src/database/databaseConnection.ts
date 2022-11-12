import mongoose from "mongoose";
import debugCreator from "turbo-debug";
import "../loadEnvironment.js";

const debug = debugCreator("w7chwe:database");

const databaseConnection = async (mongoUrl: string) => {
  await mongoose.connect(mongoUrl);
  debug("Connected to database");
};

export default databaseConnection;
