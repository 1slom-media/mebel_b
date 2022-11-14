import { Router } from "express";
import controller from "./controller.js";
import upload from "../../lib/multer.js";

const router = Router();

router.get("/banners", controller.GET);
router.get("/banners/:bannersId", controller.GET);
router.post("/banners",upload.single('image'), controller.POST);
router.put("/banners/:bannersId",upload.single('image'), controller.PUT);
router.delete("/banners/:bannersId", controller.DELETE);


export default router;