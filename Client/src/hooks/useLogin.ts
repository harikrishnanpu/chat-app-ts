import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { loginService } from "../services/auth.services";
import { login } from "../redux/Slices/authSlice";
import { loginSchema, type loginData } from "../schema/login-schema";
import { useAppDispatch } from "../redux/store";


export const useLogin = () => {

    const navigate = useNavigate(); 
    const dispatch = useAppDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm<loginData>({
        mode: "onBlur",
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const submitHandler = async (data: loginData) => { 

        try {

            const response = await loginService(data);
            dispatch(login({ user: response.data.user }));
            
            toast.success("Login successful!");
            navigate('/user/home')

        } catch (err) {
            toast.error((err as any).response.data.message);
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