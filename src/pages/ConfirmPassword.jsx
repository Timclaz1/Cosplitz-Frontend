import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import loginlogo from "../assets/loginmain.jpg";
import logo from "../assets/logo.svg";

// === ZOD VALIDATION SCHEMA ===
const schema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Must include at least one uppercase letter")
      .regex(/[0-9]/, "Must include at least one number")
      .regex(/[^A-Za-z0-9]/, "Must include at least one special character"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function CreateNewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("✅ New Password Created:", data.password);
    alert("Password reset successfully!");
    reset();
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white/40 px-6 sm:px-10 lg:px-10 py-5 overflow-hidden">
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
      <div className="relative flex w-full lg:w-1/2 flex-col justify-center items-center bg-white overflow-y-auto px-4 sm:px-8 md:px-16 lg:px-20 py-8">
        {/* Logo */}
        <div className="absolute top-0 pl-10 md:pl-20 mt-4 w-full flex justify-start mb-10">
          <img src={logo} alt="Logo" className="w-24 sm:w-28" />
        </div>

        {/* Header */}
        <div className="w-full text-center my-10 max-md:mt-40 ">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
            Create New Password
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
           please enter your new password
          </p>
        </div>

        {/* === FORM === */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md space-y-6"
          noValidate
        >
          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Enter new password"
                className={`w-full px-3 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-green-500 outline-none`}
              />
              <span
                className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword")}
                placeholder="Confirm new password"
                className={`w-full px-3 py-2 border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-green-500 outline-none`}
              />
              <span
                className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full border-2 border-green-500 rounded-2xl text-green-600 py-3 font-medium hover:bg-green-500 hover:text-white transition duration-300"
          >
            {isSubmitting ? "Saving..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
