import { Request, Response } from "express";
import { getAdminById } from "../../../Model/Admin";
import { getElectionByCollege } from "../../../Model/Eelection";
import { badRequest, successResponse } from "../../../Utils";
import { RequestWithAuth } from "../../../Types/Request";

const GetElections = async (req: RequestWithAuth, res: Response) => {
  const college = (await getAdminById(req.user.id)).college;
  const elections = await getElectionByCollege(college);
  successResponse(res, elections, "Get Elections");
};

export default GetElections;
