import { Router } from "express";
import controller from "./controller.js";
import upload from "../../lib/multer.js";

const router = Router(); 

router.get("/client_comment", controller.GET);
router.get("/client_comment/:clientId", controller.GET);
router.post("/client_comment",upload.fields([{ name: 'image', maxCount: 1 }, { name: 'avatar_image', maxCount: 1}]),controller.POST);
router.put("/client_comment/:clientId",upload?.fields([{ name: 'image', maxCount: 1 }, { name: 'avatar_image', maxCount: 1}]), controller.PUT);
router.delete("/client_comment/:clientId", controller.DELETE);


export default router; 