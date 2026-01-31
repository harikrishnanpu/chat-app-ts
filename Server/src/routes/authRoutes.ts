import express from "express";
import validate from "../middlewares/validate.js";
import {  loginSchema, otpSchema, registerSchema } from "../validations/authSchema.js";
import {  getUserDetails, loginController, registerController, } from "../controllers/registerController.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const authRouter = express.Router()


authRouter.post("/register" , validate(registerSchema) , registerController)
authRouter.post("/login", validate(loginSchema),loginController);
authRouter.get("/user",authMiddleware,getUserDetails)


export default authRouter