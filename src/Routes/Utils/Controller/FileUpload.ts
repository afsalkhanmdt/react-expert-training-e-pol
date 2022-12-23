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
  const imageUrl = uploadFile(file);
  if (!imageUrl)
    return badRequest(res, "No file uploaded", [
      {
        message: "No file uploaded",
        path: null,
      },
    ]);
  successResponse(res, { imageUrl }, "File Uploaded");
};

export default FileUpload;
