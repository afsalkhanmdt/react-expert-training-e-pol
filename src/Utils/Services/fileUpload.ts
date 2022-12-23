import { UploadedFile } from "express-fileupload";
import path from "path";
import { randomString } from "../Generator";

const uploadFile = (image: any) => {
  let uploadPath;
  let filePath;

  if (image instanceof Array) {
    return false;
  }
  const fileId = randomString(16);
  filePath = `/Assets/Images/${fileId}.jpg`;

  uploadPath = path.join(__dirname, "../../Public", filePath);
  image.mv(uploadPath, (err: any) => {
    if (err) {
      console.log(err);
      return false;
    }
  });

  return filePath;
};

export { uploadFile };
