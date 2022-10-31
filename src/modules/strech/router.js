import { Router } from "express";
import controller from "./controller.js";
import upload from "../../lib/multer.js";

const router = Router();

router.get("/stretch_ceilings", controller.GET);
router.get("/stretch_ceilings/:stretchId", controller.GET);
router.post("/stretch_ceilings",upload.single('image'),controller.POST);
router.put("/stretch_ceilings/:stretchId",upload?.single('image'), controller.PUT);
router.delete("/stretch_ceilings/:stretchId", controller.DELETE);


export default router;