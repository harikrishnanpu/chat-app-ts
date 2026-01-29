import { useRegister } from "../hooks/useRegister";

function Register() {


  const { register, handleSubmit, submitHandler } = useRegister();

  
  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            
            Your Name
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="enter your name"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Your email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="name@email.com"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="••••••••"
            required
          />
        </div>
        <label htmlFor="remember" className="flex items-center mb-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
            required
          />
          <p className="ms-2 text-sm font-medium text-heading select-none">
            I agree with the{" "}
            <a href="#" className="text-fg-brand hover:underline">
              terms and conditions
            </a>
            .
          </p>
        </label>
        <button
          type="submit"
          className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
