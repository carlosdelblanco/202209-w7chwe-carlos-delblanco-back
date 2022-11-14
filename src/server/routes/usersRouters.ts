import express from "express";
import { registerUser } from "../controllers/usersController/registerUser.js";

// eslint-disable-next-line new-cap
const usersRouter = express.Router();
usersRouter.post("/signup", registerUser);

export default usersRouter;
