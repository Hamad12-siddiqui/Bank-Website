"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);
  const onSubmit = (data) => {
    console.log(data);
  };
  const togglePassword = () => setShowPassword((prev) => !prev);

  // Eye icon (lazy import)
  const EyeIcon = React.lazy(() => import("../Login/EyeIcon"));

  // Next.js router for navigation
  const router = require('next/navigation').useRouter();
  const handleLoginClick = () => {
    router.push('/Login');
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 mt-5">
      <div className="w-full max-w-2xl p-6 md:p-12 space-y-6 text-center bg-[#262626] border-2 rounded-xl bg-[url('/images/right.svg')] bg-no-repeat bg-right-top shadow-lg">
        {/* Heading */}
        <h3 className="text-2xl md:text-3xl font-bold text-[#CAFF33]">Sign Up</h3>
        <p className="text-[#BFBFBF] text-sm md:text-base">
          Join our community today! Create an account to unlock exclusive features and personalized experiences.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
         

          {/* First + Last Name */}
          <div className=" flex flex-col md:flex-row md:gap-6 gap-4">
            <div className="w-full">
              <input
                id="firstName"
                type="text"
                placeholder="Enter First Name"
                {...register("firstName", { required: "First name is required" })}
                className="w-full px-4 py-2 rounded-lg bg-[#222] text-white focus:outline-none"
              />
              {errors.firstName && (
                <span className="text-red-500 text-xs mt-1 block">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div className="w-full">
              <input
                id="lastName"
                type="text"
                placeholder="Enter Last Name"
                {...register("lastName", { required: "Last name is required" })}
                className="w-full px-4 py-2 rounded-lg bg-[#222] text-white focus:outline-none"
              />
              {errors.lastName && (
                <span className="text-red-500 text-xs mt-1 block">
                  {errors.lastName.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-6 gap-4">
            <div className="w-full">
            <input
              id="email"
              type="email"
              placeholder="Enter your Email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 rounded-lg bg-[#222] text-white focus:outline-none"
            />
            {errors.email && (
              <span className="text-red-500 text-xs mt-1 block">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="w-full relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-2 rounded-lg bg-[#222] text-white focus:outline-none pr-10"
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#BFBFBF]"
              onClick={togglePassword}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <React.Suspense fallback={<span>...</span>}>
                <EyeIcon visible={showPassword} />
              </React.Suspense>
            </span>
            {errors.password && (
              <span className="text-red-500 text-xs mt-1 block">
                {errors.password.message}
              </span>
            )}
          </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col justify-center items-center space-y-4">
            <p className="text-[#BFBFBF] mt-2 underline cursor-pointer">
              Forgot Password?
            </p>

            <button
              type="submit"
              className="w-full md:w-[400px] py-2 bg-[#CAFF33] text-[#222] font-semibold rounded-full hover:bg-[#b2e532] transition-colors"
            >
              Sign Up
            </button>

            <button
              type="button"
              className="w-full md:w-[400px] py-2 bg-[#262626] border border-[#333333] text-white rounded-full"
              onClick={handleLoginClick}
            >
              Log In
            </button>
          </div>
        </form>

        {/* Divider + Social logins */}
        <div className="flex flex-col items-center justify-center mt-8 space-y-6">
          <div className="w-full md:w-[400px] border-t border-[#333333] relative">
            <p className="absolute left-1/2 -translate-x-1/2 -top-3 bg-[#262626] text-[#BFBFBF] px-4 text-sm">
              Or Continue with
            </p>
          </div>
          <div className="flex justify-center gap-6 md:gap-8">
            <img src="/images/Icon Container.svg" alt="Google Logo" className="w-10 h-10 md:w-12 md:h-12" />
            <img src="/images/Icon Container (1).svg" alt="Facebook Logo" className="w-10 h-10 md:w-12 md:h-12" />
            <img src="/images/Icon Container (2).svg" alt="Twitter Logo" className="w-10 h-10 md:w-12 md:h-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
