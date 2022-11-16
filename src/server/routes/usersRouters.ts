import express from "express";
import {
  loginUser,
  registerUser,
} from "../controllers/usersController/usersControllers.js";

// eslint-disable-next-line new-cap
const usersRouter = express.Router();

usersRouter.post("/signup", registerUser);
usersRouter.post("/login", loginUser);

export default usersRouter;
