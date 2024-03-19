import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const CustomInputField = ({
  name,
  title,
  type,
  required,
  min,
  max,
  value,
  disabled,
  pattern,
}) => {
  const [hidden, setHidden] = useState(true);
  const handleType = () => {
    setHidden(!hidden);
  };
  return (
    <div className="w-full h-full">
      <fieldset
        className={`border pl-3 rounded overflow-hidden relative h-full ${
          disabled
            ? "border-primary "
            : "border-secondary/50"
        } `}
      >
        <legend
          className={`px-2  text-base font-medium  ${
            disabled ? "!text-primary  " : "text-primary "
          }`}
        >
          {title}
        </legend>

        <input
          type={hidden ? type : "text"}
          name={name}
          className="w-full outline-none  p-2 pb-3 bg-inherit text-dark/80"
          required={required}
          min={min}
          max={max}
          defaultValue={value}
          disabled={disabled}
          pattern={pattern}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={handleType}
            className={`absolute right-4 top-1 text-2xl  text-secondary  `}
          >
            {hidden ? <AiFillEyeInvisible /> : <AiFillEye />}
          </button>
        )}
      </fieldset>
    </div>
  );
};

export default CustomInputField;
