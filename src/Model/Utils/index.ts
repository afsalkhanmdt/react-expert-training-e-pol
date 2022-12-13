import College from "../Schema/College";

export const createCollege = async(college:any)=>{
    const result = await College.create(college);
    return result;
}

export const getColleges = async()=>{
    const result = await College.find();
    return result;
}