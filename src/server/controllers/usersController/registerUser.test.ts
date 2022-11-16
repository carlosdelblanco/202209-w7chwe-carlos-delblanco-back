import type { NextFunction, Request, Response } from "express";
import User from "../../../database/models/User";
import type { RegisterData } from "../../types";
import { registerUser } from "./usersControllers";

const res: Partial<Response> = { status: jest.fn(), json: jest.fn() };
const next = jest.fn();

describe("Given a register controller", () => {
  describe("When it receives a username 'carlos', password 'qwerty' and email 'carlos@carlos.com'", () => {
    test("Then it should invoke it's status method with 201 and it's method json with the userid and username", async () => {
      const expectedstatus = 201;

      const user: RegisterData = {
        username: "carlos",
        password: "qwerty",
        email: "carlos@carlos.com",
      };

      const req: Partial<Request> = {
        body: user,
      };

      User.create = jest.fn().mockResolvedValue(user);
      await registerUser(req as Request, res as Response, next as NextFunction);

      expect(res.status).toHaveBeenCalledWith(expectedstatus);
    });
  });
});

describe("When it receives a request with username 'carlos', password 'qwerty', and email 'carlos@carlos.com' which already exists", () => {
  test("Then it should call the next function with a CustomError", async () => {
    const user: RegisterData = {
      username: "Carlos",
      password: "qwerty",
      email: "carlos@carlos.com",
    };

    const req: Partial<Request> = {
      body: user,
    };
    const error = new Error("Already exists");

    User.create = jest.fn().mockRejectedValue(error);

    await registerUser(req as Request, res as Response, next as NextFunction);

    expect(next).toHaveBeenCalledWith(error);
  });
});
