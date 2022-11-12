import type { Express } from "express";
import debugCreator from "turbo-debug";

const debug = debugCreator("w7chwe:users:server");

const startServer = async (app: Express, port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(`Listening on port ${port}`);
      resolve(server);
    });

    server.on("error", (error: Error) => {
      debug(`There was an error in server ${error.message}`);
      reject(error);
    });
  });

export default startServer;
