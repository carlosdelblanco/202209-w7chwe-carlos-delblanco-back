import databaseConnection from "./database/databaseConnection.js";
import "./loadEnvironment.js";
import environment from "./loadEnvironment.js";
import app from "./server/app.js";
import startServer from "./server/index.js";

const { port } = environment;

await startServer(app, +port);
await databaseConnection(environment.mongoDbUrl);
