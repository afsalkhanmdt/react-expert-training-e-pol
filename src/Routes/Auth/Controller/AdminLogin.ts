import { Request, Response } from "express"
import { getAdminByEmail } from "../../../Model/Admin";
import { badRequest, successResponse,comparePassword,generateToken} from "../../../Utils";

const AdminLogin = async(req:Request,res:Response)=>{
    const {email,password} = req.body;
    const admin = await getAdminByEmail(email);

    if(!admin|| !(await comparePassword(password,admin.password as string))){
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
                id:admin._id,
                type:"admin"
            }),
            userType: "admin"
        },
        "Login Success"
    )    
}

export default AdminLogin