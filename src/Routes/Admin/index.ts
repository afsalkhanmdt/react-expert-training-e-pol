import { Router } from "express";
import CreateElection from "./Controller/CreateElection";
import GetElections from "./Controller/GetElections";
import GetVoter from "./Controller/GetVoterByRegisterNumber";

const router = Router();

router.post("/create-election", CreateElection);
router.get("/get-elections", GetElections);

router.post("/get-voter", GetVoter);

export default router;
