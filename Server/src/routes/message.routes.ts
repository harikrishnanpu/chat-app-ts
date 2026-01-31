import { Router } from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();
router.get("/:id", authMiddleware, getMessages);
router.post("/", authMiddleware, sendMessage);

export default router;
