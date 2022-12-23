import { NextFunction, Request, Response } from "express";
import { getAdminByEmail } from "../../../Model/Admin";
import {
  getVoterByEmail,
  getVoterByRegisterNumber,
} from "../../../Model/Voter";
import { badRequest } from "../../../Utils";

export const duplicateEmail =
  (type: string) => async (req: Request, res: Response, next: NextFunction) => {
    let user;
    if (type == "Admin") {
      user = await getAdminByEmail(req.body.email);
    } else {
      user = await getVoterByEmail(req.body.email);
    }
    if (user)
      return badRequest(res, "Bad Request", [
        {
          message: "Email Already exists",
          path: "email",
        },
      ]);
    next();
  };

export const duplicateRegNo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getVoterByRegisterNumber(req.body.registerNumber);
  if (user)
    return badRequest(res, "Bad Request", [
      {
        message: "RegNo Already exists",
        path: "regNo",
      },
    ]);
  next();
};
