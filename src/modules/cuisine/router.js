import { Router } from "express";
import controller from "./controller.js";
import upload from "../../lib/multer.js";

const router = Router();

router.get("/cuisine", controller.GET);
router.get("/cuisine/:cuisineId", controller.GET);
router.post("/cuisine",upload.single('image'),controller.POST);
router.put("/cuisine/:cuisineId",upload?.single('image'), controller.PUT);
router.delete("/cuisine/:cuisineId", controller.DELETE);


export default router;