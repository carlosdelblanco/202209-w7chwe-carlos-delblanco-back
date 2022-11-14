import cors from "cors";
import express from "express";
import morgan from "morgan";
import endpointError, { generalError } from "./middlewares/errors/errors.js";

import usersRouters from "./routes/usersRouters.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/users", usersRouters);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "API Isdigram",
  });
});

app.use(generalError);
app.use(endpointError);

export default app;
