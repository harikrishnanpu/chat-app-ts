import z from "zod";


export const registerSchema = z.object({
    name: z.string().min(4, "Name must be at least 4 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    terms:  z.literal(true, { message: "You must accept the terms and conditions" }),
})


export type RegisterSchema = z.infer<typeof registerSchema>;

