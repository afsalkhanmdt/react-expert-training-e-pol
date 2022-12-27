import { Request, Response } from "express";
import { getAdminById } from "../../../Model/Admin";
import { badRequest, successResponse } from "../../../Utils";
import { RequestWithAuth } from "../../../Types/Request";
import { removeBatch } from "../../../Model/College";

const RemoveBatch = async (req: RequestWithAuth, res: Response) => {
  const college = (await getAdminById(req.user.id)).college;
  const result = await removeBatch(college, req.body);
  if (!result) return badRequest(res, "Could not delete batch");
  successResponse(res, result, "Batch Added");
};
export default RemoveBatch;
