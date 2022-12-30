import { Request, Response } from "express";
import { getAdminById } from "../../../Model/Admin";
import { getVoterByCollege } from "../../../Model/Voter";
import { RequestWithAuth } from "../../../Types/Request";
import { successResponse } from "../../../Utils";

const GetVoters = async (req: RequestWithAuth, res: Response) => {
    const college = (await getAdminById(req.user.id)).college;
    const voter = await getVoterByCollege(college);
    successResponse(res, voter, "Get Voters");
};

export default GetVoters;