import React from "react";
import { useForm } from "react-hook-form";

function ContactMe() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting},
  } = useForm();

  const delay = (d)=> {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve();
        }, d* 1000);
    })
  }

  const onSubmission = async (data) =>{
    await delay(2)
        console.log(data);
  }

  return (
    <div className="h-screen">
      <div className="bg-zinc-900 flex justify-center pt-4 ">
        <div className="p-2 text-white text-4xl max-w-screen-md my-4">Contact Me</div>
      </div>
      <form onSubmit={handleSubmit(onSubmission)}>
        <input type="text" placeholder="Enter your First Name" className="w-80%"
                     {...register("firstName", { required: true})} /> <br />
        <input type="text" placeholder="Enter your Last Name" {...register("lastName", { required: true })} /> <br />

        {errors.firstName && <p>First name is required</p>}
        {errors.lastName && <p>Last name is required.</p>}

        <input type="email" placeholder="Enter your email" {...register("email", {required: true})} /> <br />

        <input disabled={isSubmitting} type="submit" value="Submit" className="text-white border-solid border-orange-400 border-4" />
      </form>
    </div>
  );
}

export default ContactMe;
