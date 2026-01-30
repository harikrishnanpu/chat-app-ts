import { success } from "zod";
import bcrypt from "bcryptjs"
import { findIfUserExistService, otpVerifyService, saveUserToDBService, sendOtpService, } from "../services/UserAuthServices/register.services.js";


export const registerController = async (req, res) => {
    const { name, email, password } = req.body

    try {

        let user = await findIfUserExistService(email)

        if (user.success) {
            throw new Error(user.message);
        }

        const hashPassword = await bcrypt.hash(password, 10)

        let save = await saveUserToDBService(name, email, hashPassword)

        if (save.success == false) {
            throw new Error(save.message);
        }

        let otpReply = await sendOtpService(email)

        if (otpReply.success == false) {
            throw new Error(otpReply.message);
        }

        return res.status(200).json({ success: true, message: "Otp send to email" })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}


export const otpVerify = async (req, res) => {
    const { otp } = req.body

    try {
        const otpCheck = await otpVerifyService(otp)

        if (otpCheck.success == false) {
            throw new Error(otpCheck.message);
        }

        console.log(req.body)

        res.status(200).json({ success: true, message: "Otp verified successfully" })

    } catch (error) {
        res.json({ success: false, message: error })
    }
}

export const resendOtp = async (req, res) => {
    const { email } = req.body

    try {

        let user = await findIfUserExistService(email)

        if (user.success == false) {
            throw new Error(user.message);
        }

        let otpReply = await sendOtpService(email)

        if (otpReply.success == false) {
            throw new Error(otpReply.message);
        }

        return res.status(200).json({ success: true, message: "Resend otp send to email" })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}