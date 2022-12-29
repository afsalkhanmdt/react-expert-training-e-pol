import { Router } from "express";
import AddVote from "./Controller/AddVote";
import GetVoterElection from "./Controller/GetVoterElection";
import GetVoterProfile from "./Controller/GetVoterProfile";

const router = Router();

router.get("/", (_req, res) => {
  return res.send("Voters API");
});
router.get("/get-profile", GetVoterProfile);
router.get("/voter-election", GetVoterElection);

router.post("/add-vote", AddVote);

export default router;
