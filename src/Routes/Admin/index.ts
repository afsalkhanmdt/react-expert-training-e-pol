import { Router } from "express";
import AddBatch from "./Controller/AddBatch";
import AddPosition from "./Controller/AddPosition";
import CreateElection from "./Controller/CreateElection";
import GetElections from "./Controller/GetElections";
import GetAdminProfile from "./Controller/GetProfile";
import GetVoter from "./Controller/GetVoterByRegisterNumber";
import RemoveBatch from "./Controller/RemoveBatch";
import RemovePosition from "./Controller/RemovePosition";

const router = Router();

router.post("/create-election", CreateElection);
router.get("/get-elections", GetElections);

router.post("/get-voter", GetVoter);
router.get("/profile", GetAdminProfile);
router.post("/add-batch", AddBatch);
router.post("/add-position", AddPosition);
router.post("/remove-batch", RemoveBatch);
router.post("/remove-position", RemovePosition);
export default router;
