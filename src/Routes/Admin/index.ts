import { Router } from "express";
import CreateElection from "./Controller/CreateElection";
import GetElections from "./Controller/GetElections";
import GetAdminProfile from "./Controller/GetProfile";
import GetVoter from "./Controller/GetVoterByRegisterNumber";

const router = Router();

router.post("/create-election", CreateElection);
router.get("/get-elections", GetElections);

router.post("/get-voter", GetVoter);
router.get("/profile", GetAdminProfile);

export default router;
