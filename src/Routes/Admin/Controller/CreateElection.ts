import { Request, Response } from "express"
import { createElection } from "../../../Model/Eelection";
import { badRequest, successResponse} from "../../../Utils";

const CreateElection = async(req:Request,res:Response)=>{
    const election = await createElection(req.body)
    successResponse(res,
        election
        ,
        "Create Election"
    )    
}

export default CreateElection