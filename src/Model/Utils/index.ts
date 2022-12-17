import College from "../Schema/College";

export const createCollege = async(college:any)=>{
    const result = await College.create(college);
    return result;
}

export const addBatch = async(id:string , batch :any )=>{
    const result = await College.findByIdAndUpdate(id,{
        $push:{batches:batch}
    });
    return result;
}

export const getColleges = async()=>{
    const result = await College.find();
    return result;
}