import bcrypt from "bcryptjs";
import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import CustomError from "../../../CustomError/CustomError.js";
import User from "../../../database/models/User.js";
import environment from "../../../loadEnvironment.js";
import type {
  Credentials,
  RegisterData,
  UserTokenPayload,
} from "../../types.js";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password, picture, email } = req.body as RegisterData;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      password: hashedPassword,
      picture,
      email,
    });
    res.status(201).json({ user: { id: newUser._id, username, email } });
  } catch (error: unknown) {
    const generalError = new CustomError(
      (error as Error).message,
      500,
      "Error"
    );
    next(generalError);
  }
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body as Credentials;

  const user = await User.findOne({ username });

  if (!user) {
    const error = new CustomError(
      "Username error",
      401,
      "possibly credentials error"
    );
    next(error);
  }

  if (!(await bcrypt.compare(password, user.password))) {
    const error = new CustomError(
      "Password is incorrect",
      401,
      "Wrong credentials"
    );

    next(error);
  }

  const tokenPayload: UserTokenPayload = {
    id: user._id.toString(),
    username,
  };

  const token = jwt.sign(tokenPayload, environment.jwtSecret);

  res.status(200).json({ accessToken: token });
};
