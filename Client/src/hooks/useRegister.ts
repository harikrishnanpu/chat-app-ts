import { useForm } from "react-hook-form"
import { registerSchema, type RegisterSchema } from "../schema/register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { registerService } from "../services/auth.services";
import { login } from "../redux/Slices/authSlice";
import { useAppDispatch } from "../redux/store";


export const useRegister = () => {

    const navigate = useNavigate(); 
    const dispatch = useAppDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchema>({
        mode: "onBlur",
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            terms: true,
        }
    });

    const submitHandler = async (data: RegisterSchema) => { 

        try {


            const response = await registerService(data);
            dispatch(login({ user: response.data.user }));
            
            toast.success("Registration successful! You can now log in.");
            navigate('/user/home')

        } catch (err) {
            toast.error("Registration failed. Please try again.");
            console.log(err);
            return;
         }


    }


    return {
        register,
        submitHandler,
        handleSubmit,
        errors
    }


}