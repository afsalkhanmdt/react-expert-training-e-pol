import { Request } from "express";

export interface RequestWithAuth extends Request {
  user: any;
}
// export interface RequestWithFiles extends Request {
//   files: {};
// }
