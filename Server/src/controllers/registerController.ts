import { success } from "zod";
import bcrypt from "bcryptjs"

import { UserMongoRepository } from "../repository/user.repository.js";
import type { Request,Response } from "express";
import {JwtTokenService} from "../services/token.js"
import {PasswordService} from "../services/UserAuthServices/PasswordHash.js"


const userMongoRepository = new UserMongoRepository();
const jwtTokenService = new JwtTokenService()
const passwordService = new PasswordService()

export const registerController = async (req:Request, res:Response) => {
    const { name, email, password } = req.body

    const existUser = await userMongoRepository.findByEmail(email);

    if(existUser) throw new Error("user with email already exists");

    const hashedPasswod = await passwordService.hash(password)
    const user =await userMongoRepository.createUser({name : name as string,email:email as string ,password: hashedPasswod as string});

    const token =await jwtTokenService.generateToken({email,userId:user._id!})

     res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return res.status(200).json({success:true,message:"user created succesfully"})

    
}


export const loginController = async (req:Request, res:Response) => {
    const { email, password } = req.body

    const existUser = await userMongoRepository.findByEmail(email);

      if(!existUser) throw new Error("No user is found")

    const comparePassword = await passwordService.compare(password,existUser?.password as string);

    if(!comparePassword) throw new Error("Invalid password");
  
    const token =await jwtTokenService.generateToken({email,userId:existUser._id as string});

     res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return res.status(200).json({success:true,message:"User logined successfully",user:{name:existUser.name}})

    
}
