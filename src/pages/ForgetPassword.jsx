import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import loginlogo from "../assets/loginmain.jpg";
import logo from "../assets/logo.svg";

// === ZOD VALIDATION SCHEMA ===
const schema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
});

export default function ForgetPassword() {
  const navigate = useNavigate();

  // === REACT-HOOK-FORM SETUP ===
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("✅ Form Submitted:", data);
    reset();
    navigate("/verify"); // ✅ Route to verify email page
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white/40 px-6 sm:px-10 lg:px-20 py-5 overflow-hidden">
      {/* === LEFT SIDE === */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center bg-gray-50">
        <img
          src={loginlogo}
          alt="Illustration"
          className="w-full h-full object-cover rounded-r-2xl"
        />
        <div className="absolute bottom-10 mx-6 bg-white/40 backdrop-blur-xl rounded-2xl p-6 max-w-lg shadow-lg text-center">
          <h1 className="text-2xl font-semibold text-[#2D0D23] mb-2">
            Share Expenses & Resources in Real Time
          </h1>
          <p className="text-sm text-[#4B4B4B] leading-relaxed">
            Connect with students, travelers, and locals to effortlessly manage
            costs and resources — anonymously and securely.
          </p>
        </div>
      </div>

      {/* === RIGHT SIDE === */}
      <div className="flex w-full lg:w-1/2 flex-col justify-center items-center bg-white overflow-y-auto px-4 sm:px-8 md:px-16 lg:px-20 py-8">
        {/* Logo */}
        <div className="w-full flex justify-start mb-6">
          <img src={logo} alt="Logo" className="w-24 sm:w-28" />
        </div>

        <div className="w-full max-w-md">
          {/* Header */}
          <div className="w-full text-center mb-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
              Forget your password?
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">
              Please enter your recovery email and follow the steps to complete.
            </p>
          </div>

          {/* === FORM === */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Enter your email"
                className={`w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-green-500 outline-none`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <p className="text-sm text-gray-600">
              Remember Login?{" "}
              <span className="text-green-500 hover:underline cursor-pointer">
                Log in
              </span>
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full border-2 rounded-2xl text-green-500 py-3 font-medium hover:bg-green-500 hover:text-white transition duration-300"
            >
              {isSubmitting ? "Sending..." : "Send Code"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
