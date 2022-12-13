import { Request, Response } from "express"
import { createVoter } from "../../../Model/Voter";
import { successResponse } from "../../../Utils";

const VoterRegister = async(req:Request,res:Response)=>{
    const voter = await createVoter(req.body);
    successResponse(res,
        voter,
        "Registration Success"
    )    
}

export default VoterRegister