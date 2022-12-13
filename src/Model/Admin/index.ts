import { hashPassword } from "../../Utils";
import Admin from "../Schema/Admin";

export const createAdmin = async(admin:any)=>{
    const result = await Admin.create({
        ...admin,
        password: await hashPassword(admin.password)
    });
    return result;
}