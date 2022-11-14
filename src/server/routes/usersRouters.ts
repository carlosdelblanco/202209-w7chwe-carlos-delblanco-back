import express from "express";
import { registerUser } from "../controllers/usersController/registerUser.js";

const usersRouter = express.Router();
usersRouter.post("/signup", registerUser);

export default usersRouter;
