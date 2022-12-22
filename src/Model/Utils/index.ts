import College from "../Schema/College";
import Election from "../Schema/Election";

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

export const addPosition = async(id:string , position :any )=>{
    const result = await College.findByIdAndUpdate(id,{
        $push:{positions:position}
    });
    return result;
}

export const getColleges = async()=>{
    const result = await College.find();
    return result;
}

export const getElections = async()=>{
    const result = await Election.find()
    .populate('positions.candidates.studentId')
    .populate({
        path:     'positions.id',
        model: "Collage"
    })
    // .populate(
    //     {
    //         path: "student",

    //     }
    // );
    return result;
}