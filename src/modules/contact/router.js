import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/contact_us", controller.GET);
router.get("/contact_us/:contactUsId", controller.GET);
router.post("/contact_us", controller.POST);
router.put("/contact_us/:contactUsId", controller.PUT);
router.delete("/contact_us/:contactUsId", controller.DELETE);


export default router;