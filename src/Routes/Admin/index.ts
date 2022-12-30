import { Router } from "express";
import AddBatch from "./Controller/AddBatch";
import AddPosition from "./Controller/AddPosition";
import CreateElection from "./Controller/CreateElection";
import GetDashBoard from "./Controller/GetDashBoard";
import GetElections from "./Controller/GetElections";
import GetAdminProfile from "./Controller/GetProfile";
import GetVoter from "./Controller/GetVoterByRegisterNumber";
import GetVoters from "./Controller/GetVoters";
import RemoveBatch from "./Controller/RemoveBatch";
import RemovePosition from "./Controller/RemovePosition";
import UpdateElection from "./Controller/UpdateElection";

const router = Router();

router.get("/dashboard", GetDashBoard);

router.post("/create-election", CreateElection);
router.post("/update-election", UpdateElection);
router.get("/get-elections", GetElections);

router.post("/get-voter", GetVoter);
router.get("/get-voters", GetVoters);
router.get("/profile", GetAdminProfile);
router.post("/add-batch", AddBatch);
router.post("/add-position", AddPosition);
router.post("/remove-batch", RemoveBatch);
router.post("/remove-position", RemovePosition);
export default router;
