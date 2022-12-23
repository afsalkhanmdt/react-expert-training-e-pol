import { Request, Response } from "express";
import { getAdminById } from "../../../Model/Admin";
import { badRequest, successResponse } from "../../../Utils";
import { RequestWithAuth } from "../../../Types/Request";
import { addBatch } from "../../../Model/College";

const AddBatch = async (req: RequestWithAuth, res: Response) => {
  const college = (await getAdminById(req.user.id)).college;
  const result = await addBatch(college, req.body.batch);
  if (!result) return badRequest(res, "Could not add batch");
  successResponse(res, result, "Batch Added");
};
export default AddBatch;
