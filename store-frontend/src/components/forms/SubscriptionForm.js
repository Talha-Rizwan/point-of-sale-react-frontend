import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

const SubscriptionForm = ({ setOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log("submitted data: ", data);
        alert("Now you will recieve emails from us!");
        setOpen(false);
      })}
    >
      <div className="mb-4">
        <label htmlFor="firstname" className="block mb-2">
          First Name
        </label>
        <input {...register("firstname", { required: true })} />
        {errors.firstname && (
          <p className="text-red-500">First Name is required</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block mb-2">
          Last Name
        </label>
        <input {...register("lastName", { required: true })} />
        {errors.lastName && (
          <p className="text-red-500">lastName is required</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p className="text-red-500">email is required</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">
          Age
        </label>
        <input {...register("age", { pattern: /\d+/ })} />
        {errors.age && (
          <p className="text-red-500">Please enter number for age.</p>
        )}
      </div>

      <input
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 rounded"
        type="submit"
      />
    </form>
  );
};

SubscriptionForm.propTypes = {
  setOpen: PropTypes.func,
};

export default SubscriptionForm;
