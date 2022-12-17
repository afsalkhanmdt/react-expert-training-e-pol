import { hashPassword } from "../../Utils";
import Voter from "../Schema/Voter";

export const createVoter = async(voter:any)=>{
    const result = await Voter.create({
        ...voter,
        password: await hashPassword(voter.password)
    });
    return result;
}

export const getVoterByEmail = async(email:any)=>{
    const result = await Voter.findOne({
        email
    });
    return result;
}