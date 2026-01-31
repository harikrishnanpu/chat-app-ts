import { api } from "../lib/axios";
import type { RegisterSchema } from "../schema/register-schema";




export const registerService = async (data: RegisterSchema) => { 
    return await api.post('/auth/register', {
        name: data.name,
        email: data.email,
        password: data.password
    });
}


export const loginService = async (data: { email: string; password: string }) => { 
    return await api.post('/auth/login', {
        email: data.email,
        password: data.password
    });
}