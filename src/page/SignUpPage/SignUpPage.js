import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomInputField from "../../components/Common/CustomInputField/CustomInputField";
import { create } from "../../hook/create";

const SignUpPage = () => {
  const navigate = useNavigate();
  const formRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formRef.current) {
      const data = {
        name: formRef.current.name.value,
        userName: formRef.current.userName.value,
        password: formRef.current.password.value,
      };

      create({
        endPoint: "user",
        data: data,
        navigate: navigate,
      });
    }
  };
  return (
    <div className=" text-white backgroundLinear relative">
      <div className="w-[20rem] sm:w-[25rem] mx-auto min-h-screen flex flex-col justify-center gap-y-4 ">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold">
            <span className="text-primary">WE</span>
            <span className="text-secondary">GRO</span>
          </h1>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-4  pt-8"
        >
          <CustomInputField
            name="name"
            title="Full Name"
            type="text"
            required
          />
          <CustomInputField
            name="userName"
            title="Username"
            type="text"
            required
          />
          <CustomInputField
            name="password"
            title="Password"
            type="password"
            required
            min={8}
          />
          <button
            type="submit"
            className="bg-primary/50  text-white uppercase font-medium py-4 hover:bg-primary  duration-300 rounded"
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-between">
          <Link to="/login" className="text-primary font-bold">
            Already have an account!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
