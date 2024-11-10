import React from "react";
import { FieldError } from "react-hook-form";

type InputFieldsProps = {
  label: string;
  type?: string;
  register: any;
  error?: FieldError;
  name: string;
  defaultValue?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};
const InputFields = ({
  label,
  type = "text",
  register,
  error,
  name,
  defaultValue,
  inputProps,
}: InputFieldsProps) => {
  return (
    <div className="flex gap-4 flex-col w-full md:w-1/4">
      <label htmlFor="username" className="text-xs text-gray-400">
        {label}
      </label>
      <input
        type={type}
        {...register(name)}
        className="ring-[1.5px] ring-gray-300 rounded-md p-2 text-sm outline-none w-full"
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className="text-red-500 text-xs">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default InputFields;
