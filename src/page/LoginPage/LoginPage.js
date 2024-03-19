import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../hook/login";
import CustomInputField from "../../components/Common/CustomInputField/CustomInputField";
import { DATA_CONTEXT } from "../../provider/DataProvider";

const LoginPage = () => {
  const { userDataMange } = useContext(DATA_CONTEXT) || {};
  const navigate = useNavigate();
  const formRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formRef.current) {
      const data = {
        userName: formRef.current.userName.value,
        password: formRef.current.password.value,
      };

      loginUser({
        data: data,
        refetch: userDataMange.userRefetch,
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
            login
          </button>
        </form>
        <div className="flex justify-between">
          <Link to="/signup" className="text-secondary font-bold">
            Are you new here?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
