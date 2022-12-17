import { Router } from "express"
import Admin from "../../Model/Schema/Admin";
import Voter from "../../Model/Schema/Voter";
import { addBatch, createCollege, getColleges } from "../../Model/Utils";
import { successResponse } from "../../Utils";

const router = Router()


router.get("/colleges",async(req,res)=>{
    const result = await getColleges();
    successResponse(res,result,"collage list")
})

router.post("/add-college",async(req,res)=>{
    const result = await createCollege(req.body)
    successResponse(res,result,"College Added")
})

router.post("/add-batch",async(req,res)=>{
    const result = await addBatch(req.body.id,req.body.batch)
    successResponse(res,result,"College Added")
})

router.get("/voters",async(req,res)=>{
    const result = await Voter.find().populate("college")
    successResponse(res,result,"Voter List")
})

router.get("/admins",async(req,res)=>{
    const result = await Admin.find().populate("college")
    successResponse(res,result,"Colleges List")
})

export default router;