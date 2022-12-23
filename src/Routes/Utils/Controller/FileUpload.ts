import { Request, Response } from "express";
import { badRequest, successResponse, uploadFile } from "../../../Utils";

const FileUpload = async (req: Request, res: Response) => {
  if (!req.files.image) {
    return badRequest(res, "No file uploaded", [
      {
        message: "No file uploaded",
        path: null,
      },
    ]);
  }
  const file: any = req.files.image;
  if (file.mimetype.split("/")[0] !== "image")
    return badRequest(res, "No file uploaded", [
      {
        message: "No file uploaded",
        path: null,
      },
    ]);
  const filePath = uploadFile(file);
  if (!filePath)
    return badRequest(res, "No file uploaded", [
      {
        message: "No file uploaded",
        path: null,
      },
    ]);
  successResponse(res, { filePath }, "File Uploaded");
};

export default FileUpload;
