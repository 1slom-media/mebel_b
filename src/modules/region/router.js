import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/region", controller.GET);
router.get("/region/:regionId", controller.GET);
router.post("/region", controller.POST);
router.put("/region/:regionId", controller.PUT);
router.delete("/region/:regionId", controller.DELETE);


export default router;