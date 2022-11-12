import bcrypt from "bcryptjs";
import type { NextFunction, Request, Response } from "express";
import CustomError from "../../../CustomError/CustomError";
import User from "../../../database/models/User";
import type { RegisterData } from "../../types";

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
