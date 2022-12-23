import { Request, Response } from "express";
import { getAdminById } from "../../../Model/Admin";
import { badRequest, successResponse } from "../../../Utils";
import { RequestWithAuth } from "../../../Types/Request";
import { addPosition } from "../../../Model/College";

const AddPosition = async (req: RequestWithAuth, res: Response) => {
  const college = (await getAdminById(req.user.id)).college;
  const result = await addPosition(college, req.body.position);
  successResponse(res, result, "Batch Added");
};
export default AddPosition;
