import { SubmitHandler, useForm } from "react-hook-form";

interface SigningProps {
  fname: string;
  lName: string;
  email: string;
  password: string;
  confirmPassword: string;
  termOfService: string
}

const validatePassword =({passwrd}: string) => {

}
const ResetPassword = () => {
  const { register, handleSubmit, formState:{errors }, watch } = useForm<SigningProps>();
  const password =  watch("password")
  console.log(errors)
  const onSubmit: SubmitHandler<SigningProps> = (data) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center h-screen m-10 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-2/5 bg-green-200 border-black p-5 rounded"
      >
        <div className="flex justify-center flex-col mb-5 p-5 gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="border-2 border-blue-300 rounded"
              id="name"
              {...register("fname", { required: {
                value: true,
                message: "This field is required"
              },
                minLength: {
                  value: 2,
                message: "Name must be at least 2 characters"},
                maxLength: {
                  value: 20,
                message: "Name must be at most 20 characters"},
               })}
            />
            {errors.fname &&  <span className="text-xs text-red-600">{errors.fname.message}</span>}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              className="border-2 border-blue-300 rounded"
              {...register("lName",{ required: {
                value: true, 
                message: "This field is required"
                
              }})}
            />
            {errors.lName &&  <span className="text-xs text-red-600">{errors.lName.message}</span>}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              className="border-2 border-blue-300 rounded"
              {...register("email", {required: true})}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="border-2 border-blue-300 rounded"
              autoComplete="off"
              {...register("password", {required: {
                value: true,
                message: "This field is required"
              },
             })}
            />
            {errors.password && <p className="textxs text-red-300">{errors.password?.message}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="border-2 border-blue-300 rounded"
              {...register("confirmPassword", {required: {
                value: true,
                message: "This field is required"
              },
              // watch === password
            })}
            />
          </div>
          <div className="flex gap-1">
            <input
              type="checkbox"
              id="termOfService"
              {...register("termOfService")}
            />
            <label htmlFor="termOfService">Terminos of service</label>
          </div>
        </div>
        <div className="flex justify-center gap-5">
          <button type="submit" className="px-10 py-3 bg-green-400 rounded hover:bg-green-500 hover:text-white trasition-all duration-300 ease-in ">
            Submit
          </button>
          <button type="reset" className="px-10 py-3 bg-gray-400 rounded hover:bg-gray-500 hover:text-white trasition-all duration-300 ease-in">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
