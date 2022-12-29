import { Response } from "express";
import { getVoterById } from "../../../Model/Voter";
import { RequestWithAuth } from "../../../Types/Request";

import { badRequest, successResponse } from "../../../Utils";

const getVoterProfile = async (req: RequestWithAuth, res: Response) => {
  const voter = await getVoterById(req.user.id);
  successResponse(res, voter, "Voter Found");
};

export default getVoterProfile;
