import type { Response } from "express";
import { endpointError } from "./errors";

describe("Given an error middleware and the function endpointError", () => {
  describe("When it receives a response", () => {
    test("Then it should return the method status 404 ", () => {
      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const expectedStatus = 404;

      endpointError(null, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });
  });
});
