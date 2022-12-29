import { Response } from "express";
import {
  addCandidateVotes,
  addVoterToElection,
} from "../../../Model/Eelection";
import { RequestWithAuth } from "../../../Types/Request";

import { badRequest, successResponse } from "../../../Utils";

const AddVote = async (req: RequestWithAuth, res: Response) => {
  const userVoted = await addVoterToElection(req.body.election, req.user.id);
  if (!userVoted) {
    return badRequest(res, "Error Adding Vote");
  }
  const result = await addCandidateVotes(req.body.election, req.body.votes);
  successResponse(res, {}, "Vote Added");
};

export default AddVote;
