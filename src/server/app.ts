import express from "express";
import morgan from "morgan";
import usersRouters from "./routes/usersRouters.js";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/users", usersRouters);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "API Isdigram",
  });
});

export default app;
