

import { Request, Response } from "express"
import { getVoterByRegisterNumber } from "../../../Model/Voter";
import { badRequest, successResponse} from "../../../Utils";

const GetVoter = async(req:Request,res:Response)=>{
    const voter = await getVoterByRegisterNumber(req.body.registerNumber)
    successResponse(res,
        voter
        ,
        "Get Voter"
    )    
}

export default GetVoter