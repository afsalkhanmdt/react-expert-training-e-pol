import { Request, Response } from "express"
import { createAdmin } from "../../../Model/Admin";
import { successResponse } from "../../../Utils";

const AdminRegister = async(req:Request,res:Response)=>{
    const admin = await createAdmin(req.body);
    successResponse(res,
        admin,
        "Registration Success"
    )    
}

export default AdminRegister