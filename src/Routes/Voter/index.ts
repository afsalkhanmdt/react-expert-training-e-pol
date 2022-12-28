import { Router } from "express";
import getVoterElection from "./Controller/getVoterElection";

const router = Router();

router.get("/", (_req, res) => {
  return res.send("Voters API");
});

router.get("/voter-election", getVoterElection);

export default router;
