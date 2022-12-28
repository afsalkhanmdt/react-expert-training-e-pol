import { Request, Response } from "express";
import { getAdminById } from "../../../Model/Admin";
import { updateElection } from "../../../Model/Eelection";
import { badRequest, successResponse } from "../../../Utils";
import { RequestWithAuth } from "../../../Types/Request";

const UpdateElection = async (req: RequestWithAuth, res: Response) => {
  const college = (await getAdminById(req.user.id)).college;
  const election = await updateElection(req.body.id, { ...req.body, college });
  successResponse(res, election, "Create Election");
};

export default UpdateElection;
