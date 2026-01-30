import {z} from "zod"

export const registerSchema = z.object({
  body: z.object({
    name: z.string().min(3, "name must be 3 characters !"),
    email: z.string().email("Invalid email !"),
    password: z.string().min(6, "Password must be 6 characters !"),
  }),
});

export const otpSchema = z.object({
  body : z.object({
    otp : z.string().min(6 , "Wrong otp !").max(6 , "wrong otp !")
  })
})

export const emailSchema = z.object({
  body : z.object({
    email: z.string().email("Invalid email !")
  })
})