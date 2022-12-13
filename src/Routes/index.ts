import { Router } from "express"
const router = Router()

import Auth from "./Auth"
import Shop from "./Shop"
import Utils from "./Utils"

router.use("/auth",Auth)
router.use("/utils",Utils)
router.use("/shop",Shop)

export default router;