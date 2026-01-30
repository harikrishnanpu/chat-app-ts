import express from "express";
import validate from "../middlewares/validate.js";
import { emailSchema, otpSchema, registerSchema } from "../validations/authSchema.js";
import { otpVerify, registerController, resendOtp } from "../controllers/registerController.js";

const authRouter = express.Router()


authRouter.post("/register" , validate(registerSchema) , registerController)
authRouter.post("/otp-verify" , validate(otpSchema) , otpVerify)
authRouter.post("resend-otp" , validate(emailSchema) , resendOtp)

export default authRouter