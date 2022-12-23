import { Request, Response } from "express";
import { getAdminById } from "../../../Model/Admin";
import { badRequest, successResponse } from "../../../Utils";
import { RequestWithAuth } from "../../../Types/Request";
import { removePosition } from "../../../Model/College";

const RemovePosition = async (req: RequestWithAuth, res: Response) => {
  const college = (await getAdminById(req.user.id)).college;
  const result = await removePosition(college, req.body.position);
  if (!result) return badRequest(res, "Could not remove position");
  successResponse(res, result, "Batch Added");
};
export default RemovePosition;
