import { useForm } from "react-hook-form"



export const useRegister = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = (data: any) => { 
        
    }


    return {

        register,
        submitHandler,
        handleSubmit,
        errors

    }


}