import { Response } from "express";
import { getAdminById } from "../../../Model/Admin";
import { badRequest, successResponse } from "../../../Utils";
import { RequestWithAuth } from "../../../Types/Request";
import { getVoterByCollege } from "../../../Model/Voter";
import { getElectionByCollege } from "../../../Model/Eelection";

const GetDashBoard = async (req: RequestWithAuth, res: Response) => {
  const admin = await getAdminById(req.user.id);
  const college = admin.college;
  const students = (await getVoterByCollege(college)).length;
  const election = (await getElectionByCollege(college))[0]; //!need to select which election to show
  if (!election) return badRequest(res, "No Election Found");
  const posts = election.positions.length;
  let candidates = 0;
  const voters = election.voters.length;
  election.positions.forEach((item: any) => {
    candidates += item.candidates.length;
  });
  console.log(candidates, students, voters, posts);
};

export default GetDashBoard;
