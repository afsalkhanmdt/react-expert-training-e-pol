import { Router } from "express"
import CreateElection from "./Controller/CreateElection";
import GetVoter from "./Controller/GetVoterByRegisterNumber";

const router = Router()

router.post("/create-election",
CreateElection
)

router.post("/get-voter",
GetVoter
)


export default router;