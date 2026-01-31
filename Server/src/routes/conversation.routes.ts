import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { getConversations } from "../controllers/conversation.controller.js";


const conversionRoutes = Router();
conversionRoutes.get("/", authMiddleware, getConversations);
export default conversionRoutes;
