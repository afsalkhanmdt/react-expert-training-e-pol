import { Response } from "express";
import { getOngoingElection } from "../../../Model/Eelection";
import { getVoterById } from "../../../Model/Voter";
import { RequestWithAuth } from "../../../Types/Request";

import { badRequest, successResponse } from "../../../Utils";

const getVoterElection = async (req: RequestWithAuth, res: Response) => {
  const voter = await getVoterById(req.user.id);
  if (!voter) return badRequest(res, "Voter not found");
  const election = await getOngoingElection(voter.college);
  if (!election) return badRequest(res, "No Election Found");
  successResponse(res, election, "Election Found");
};

export default getVoterElection;
