import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/ceiling_option", controller.GET);
router.get("/ceiling_option/:ceilingId", controller.GET);
router.post("/ceiling_option", controller.POST);
router.put("/ceiling_option/:ceilingId", controller.PUT);
router.delete("/ceiling_option/:ceilingId", controller.DELETE);


export default router;