import { Router } from "express";
import { addChannel } from "../controllers/list.Controllers.js";

const router = Router();

router.post("/channel",addChannel)

export default router;