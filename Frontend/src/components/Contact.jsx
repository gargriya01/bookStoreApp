import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="mt-28  justify-center text-center">
      {/* <div className=" w-[500px] "> */}
      {/* <div className="modal-box"> */}
        {/* 

     <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          //<form onSubmit={handleSubmit(onSubmit)} method="dialog"> */}
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg">Contact Us</h3>

          {/* Name */}
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("name", { required: true })}
            />
            <br />
            {errors.name && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          {/* Email */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <div className="mt-4 space-y-2">
            <label>Message</label>
            <br />
            <input 
              type="text"
              placeholder=" Type your message"
              className="w-80 px-3 py-3 border rounded-md outline-none"
              {...register("text", { required: true })}
            />
            <br />
            {errors.text && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          {/* Button */}
          <div className="flex justify-around mt-6">
            <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">
              Submit
            </button>
          </div>
        </form>
      {/* </div> */}

      {/* </div> */}
    </div>

    // </dialog>
    // </div>
  );
}

export default Contact;
