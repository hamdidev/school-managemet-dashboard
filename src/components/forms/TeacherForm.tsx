"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputFields from "./InputFields";
import Image from "next/image";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(20, { message: "Username must be at most 20 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(20, { message: "Password must be at most 20 characters" }),
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  phone: z
    .string()
    .min(9, { message: "Phone number must be at least 9 characters" })
    .max(20, { message: "Phone number must be at most 20 characters" }),
  address: z.string().min(1, { message: "Address is required." }),
  bloodType: z.string().min(1, { message: "Blood type is required." }),
  birthday: z.date({
    message: "Birthday is required.",
  }),
  sex: z.enum(["male", "female"], {
    message: "Sex is required.",
  }),
  img: z.instanceof(File, { message: "Image is required." }),
});
type inputs = z.infer<typeof schema>;
const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputs>({
    resolver: zodResolver(schema),
  });
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <form className="flex flex-col gap-8 p-4" onSubmit={onSubmit}>
      <h2 className="text-xl font-semibold">Create a new teacher</h2>
      <span className="text-xs text-gray-400 font-medium">
        Authenication information
      </span>
      <div className="flex gap-4 justify-between flex-wrap">
        <InputFields
          label="Username"
          type="text"
          register={register}
          error={errors.username}
          name="username"
          defaultValue={data?.username}
        />
        <InputFields
          label="Email"
          type="email"
          register={register}
          error={errors.email}
          name="email"
          defaultValue={data?.email}
        />
        <InputFields
          label="Password"
          type="password"
          register={register}
          error={errors.password}
          name="password"
          defaultValue={data?.password}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Personal information
      </span>
      <div className="flex flex-wrap gap-4 justify-between">
        <InputFields
          label="First Name"
          type="text"
          register={register}
          error={errors.firstName}
          name="firstName"
          defaultValue={data?.firstName}
        />
        <InputFields
          label="Last Name"
          type="text"
          register={register}
          error={errors.lastName}
          name="lastName"
          defaultValue={data?.lastName}
        />
        <InputFields
          label="Phone"
          type="text"
          register={register}
          error={errors.phone}
          name="phone"
          defaultValue={data?.phone}
        />
        <InputFields
          label="Address"
          type="text"
          register={register}
          error={errors.address}
          name="address"
          defaultValue={data?.address}
        />
        <InputFields
          label="Blood Type"
          type="text"
          register={register}
          error={errors.bloodType}
          name="bloodType"
          defaultValue={data?.bloodType}
        />
        <InputFields
          label="Birthday"
          type="date"
          register={register}
          error={errors.birthday}
          name="birthday"
          defaultValue={data?.birthday}
        />

        <div className="flex gap-4 flex-col w-full md:w-1/4">
          <label htmlFor="sex" className="text-xs text-gray-400">
            Sex
          </label>

          <select
            className="ring-[1.5px] ring-gray-300 rounded-md p-2 text-sm outline-none w-full"
            defaultValue={data?.sex}
            {...register("sex")}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex?.message && (
            <p className="text-red-500 text-xs">
              {errors.sex.message.toString()}
            </p>
          )}
        </div>

        <div className="flex gap-4 flex-col w-full md:w-1/4 justify-center">
          <label
            htmlFor="img"
            className="text-xs text-gray-400 flex items-center gap-2 cursor-pointer"
          >
            <Image src="/upload.png" alt="logo" width={20} height={20} />
            <span>Upload a photo</span>
          </label>

          <input
            accept="image/*"
            id="img"
            type="file"
            {...register("img")}
            className="hidden"
          />
          {errors.img?.message && (
            <p className="text-red-500 text-xs">
              {errors.img.message.toString()}
            </p>
          )}
        </div>
      </div>
      <button type="submit" className="bg-timoSky p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default TeacherForm;
