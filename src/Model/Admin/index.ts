import { hashPassword } from "../../Utils";
import Admin from "../Schema/Admin";

export const createAdmin = async (admin: any) => {
  const result = await Admin.create({
    ...admin,
    password: await hashPassword(admin.password),
  });
  return result;
};

export const getAdminByEmail = async (email: any) => {
  const result = await Admin.findOne({
    email,
  });
  return result;
};
export const getAdminById = async (id: any) => {
  const result = await Admin.findById(id).populate("college")
  return result;
};
