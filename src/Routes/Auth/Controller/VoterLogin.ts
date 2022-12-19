import { Request, Response } from "express"
import { getVoterByEmail } from "../../../Model/Voter";
import { badRequest, successResponse,comparePassword,generateToken} from "../../../Utils";

const VoterLogin = async(req:Request,res:Response)=>{
    const {email,password} = req.body;
    const voter = await getVoterByEmail(email);

    if(!voter|| !(await comparePassword(password,voter.password as string))){
        return badRequest(
        res,
            "Login Failed",    
        [{
            message: "Invalid Login Credentials",
            path: null
        }],
        )
    }
    successResponse(res,
        {
            token: generateToken({
                id:voter._id,
                type:"voter"
            }),
            userType: "voter"
        },
        "Login Success"
    )    
}

export default VoterLogin