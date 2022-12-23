import { Request, Response } from "express";
import { getAdminById } from "../../../Model/Admin";

import { badRequest, successResponse } from "../../../Utils";
import { RequestWithAuth } from "../../../Types/Request";

const GetAdminProfile = async (req: RequestWithAuth, res: Response) => {
  const admin = await getAdminById(req.user.id);
  if (!admin) return badRequest(res, "Admin Not Found");
  admin.password = undefined;
  successResponse(res, admin, "Data Fetched");
};

export default GetAdminProfile;
