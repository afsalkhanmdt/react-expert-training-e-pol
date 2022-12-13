import { Router } from "express"
import { joiValidateMiddleware } from "../../Utils"
import { AdminRegisterSchema, VoterRegisterSchema } from "../../Validation/ValidationSchemas/auth"
import AdminRegister from "./Controller/AdminRegister"
import VoterRegister from "./Controller/VoterRegister"

const router = Router()

router.get("/",(_req,res)=>{
    return res.send("Auth API")
})


router.post("/voter-register",
joiValidateMiddleware(VoterRegisterSchema),
VoterRegister)

router.post("/admin-register",
joiValidateMiddleware(AdminRegisterSchema),
AdminRegister)

//TODO Implement controller
router.post("/voter-login",(req,res)=>{
    res.send("Voter Login")
})

//TODO Implement controller
router.post("/admin-login",(req,res)=>{
    res.send("Admin Login")
})

export default router;