import { email, success } from "zod";

export const findIfUserExistService = async(email)=>{
    try {

        let exist = await findUserRepo(email)

        if(exist){
            throw new Error("User already exist !");
        }

        return {success : false}
        
    } catch (error) {
        return {success : true , message : error.message}
    }
}

export const saveUserToDBService = async(name , email , hashPassword)=>{
    try {
        
        let save = await insertUserRepo(name , email , hashPassword)

        if(save){
            return {success : true}
        }

        throw new Error("Db insert error !");
        

    } catch (error) {
        return {success : false , message : error.message}
    }
}

export const sendOtpService = async(email)=>{
    // send email
}

export const otpVerifyService = async(otp)=>{

    return {success : true}
    // otp verify logic
}