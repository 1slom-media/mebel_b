import { Router } from "express";
import controller from "./controller.js";
import upload from "../../lib/multer.js";

const router = Router();

router.get("/partners", controller.GET);
router.get("/partners/:partnerId", controller.GET);
router.post("/partners",upload.fields([{ name: 'image', maxCount: 1 }, { name: 'avatar_image', maxCount: 1}]),controller.POST);
router.put("/partners/:partnerId",upload?.fields([{ name: 'image', maxCount: 1 }, { name: 'avatar_image', maxCount: 1}]), controller.PUT);
router.delete("/partners/:partnerId", controller.DELETE);


export default router;