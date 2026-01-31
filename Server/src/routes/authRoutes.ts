import express from "express";
import validate from "../middlewares/validate.js";
import {  loginSchema, otpSchema, registerSchema } from "../validations/authSchema.js";
import {  loginController, registerController, } from "../controllers/registerController.js";

const authRouter = express.Router()


authRouter.post("/register" , validate(registerSchema) , registerController)
authRouter.post("/login", validate(loginSchema),loginController)


export default authRouter