import { useForm } from "react-hook-form";

const ResetPassword = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();
  
  console.log(errors)
  const onsubmit = handleSubmit((data) => {
    // console.log(data);
  });
  return (
    <div className="flex justify-center items-center h-screen ">
      <form
        onSubmit={onsubmit}
        className="w-full md:w-2/5 bg-green-200 border-black p-5 rounded"
      >
        <div className="flex justify-center flex-col mb-5 p-5 gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="border-2 border-blue-300 rounded"
              id="name"
              {...register("name", { required: true,
                minLength: 2,
                maxLength: 20
               })}
            />
            {errors.name &&  <span className="text-xs text-red-600">Name is required</span>}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              className="border-2 border-blue-300 rounded"
              {...register("lastName",{ required:true})}
            />
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
              {...register("password")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="border-2 border-blue-300 rounded"
              {...register("confirmPassword")}
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
          <button type="submit" className="px-10 py-3 bg-green-400 rounded">
            Submit
          </button>
          <button type="reset" className="px-10 py-3 bg-gray-400 rounded">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
