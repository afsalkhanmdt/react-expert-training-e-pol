import { Router } from "express";
import { joiValidateMiddleware } from "../../Utils";
import {
  AdminRegisterSchema,
  VoterRegisterSchema,
} from "../../Validation/ValidationSchemas/auth";
import AdminLogin from "./Controller/AdminLogin";
import AdminRegister from "./Controller/AdminRegister";
import VoterLogin from "./Controller/VoterLogin";
import VoterRegister from "./Controller/VoterRegister";
import { duplicateEmail, duplicateRegNo } from "./Validation";

const router = Router();

router.get("/", (_req, res) => {
  return res.send("Auth API");
});

router.post(
  "/voter-register",
  joiValidateMiddleware(VoterRegisterSchema),
  duplicateEmail("Voter"),
  duplicateRegNo,
  VoterRegister
);

router.post(
  "/admin-register",
  joiValidateMiddleware(AdminRegisterSchema),
  duplicateEmail("Admin"),
  AdminRegister
);

router.post("/voter-login", VoterLogin);

router.post("/admin-login", AdminLogin);

export default router;
