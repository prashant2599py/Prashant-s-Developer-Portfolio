import React from "react";
import { useForm } from "react-hook-form";

function ContactMe() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmission = async (data) => {
    await delay(2);
    console.log(data);
  };

  return (
    <div className="h-screen w-screen ">
 

        <div className="bg-zinc-900 flex justify-center pt-4 ">
          <div className="p-2 text-white text-4xl max-w-screen-md my-4 mt-12">
            Contact Me
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmission)} className="flex justify-center">
            <input
                type="text"
                placeholder="Enter your First Name"
                className="px-2 h-12 w-128  bg-zinc-800 border-solid border-2 border-zinc-700 rounded-xl mx-4
                my-4 content-center items-center"
                {...register("firstName", { required: true })}
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Enter your Last Name"
              className="px-2 h-12 w-128  bg-zinc-800 border-solid border-2 border-zinc-700 rounded-xl my-4 content-center items-center"
              {...register("lastName", { required: true })}
              />{" "}
            <br />
            {errors.firstName && <p>First name is required</p>}
            {errors.lastName && <p>Last name is required.</p>}
            <input
              type="email"
              placeholder="Enter your email"
              className="px-2 h-12 w-128  bg-zinc-800 border-solid border-2 border-zinc-700 rounded-xl my-4 content-center items-center"
              {...register("email", { required: true })}
              />{" "}
            <br />
            <input
              disabled={isSubmitting}
              type="submit"
              value="Submit"
              className="px-2 pb-1 h-12 w-28 text-xl text-white border-solid border-zinc-800 border-4 rounded-xl"
              />
        </form>
      
    </div>
  );
}

export default ContactMe;
