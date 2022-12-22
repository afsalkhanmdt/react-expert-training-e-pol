import Election from "../Schema/Election";

export const createElection = async(election:any)=>{
    const result = await Election.create(election);
    return result;
}
