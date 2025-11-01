import { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import loginlogo from "../assets/loginmain.jpg";
import logo from "../assets/logo.svg";

// === ZOD VALIDATION SCHEMA ===
const schema = z.object({
  code: z
    .string()
    .min(6, "Code must be 6 digits")
    .max(6, "Code must be 6 digits")
    .regex(/^[0-9]+$/, "Only numbers are allowed"),
});

export default function VerifyEmail() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  // === REACT-HOOK-FORM SETUP ===
  const {
    handleSubmit,
    formState: { isSubmitting },
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { code: "" },
  });

  // === HANDLERS ===
  const handleChange = (e, index) => {
    const value = e.target.value.slice(-1);
    if (!/^[0-9]?$/.test(value)) return; // Only digits

    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode);

    // Auto focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }

    setValue("code", updatedCode.join(""));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const onSubmit = (data) => {
    console.log("✅ Verification Code Submitted:", data.code);
    alert("Verification Successful!");
  };

  const handleResend = () => {
    console.log("🔁 Resend Code Clicked");
    alert("Verification code resent to your email!");
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
      <div className=" relative flex w-full lg:w-1/2 flex-col justify-center items-center bg-white overflow-y-auto px-4 sm:px-8 md:px-16 lg:px-20 py-8">
        {/* Logo */}
        <div className="absolute top-0 pl-20 mt-4 w-full flex justify-start mb-10">
          <img src={logo} alt="Logo" className="w-24 sm:w-28" />
        </div>

        {/* Header */}
        <div className="w-full text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
            Verify your email
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Please enter the 6-digit verification code sent to your email.
          </p>
        </div>

        {/* === FORM === */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md space-y-6"
          noValidate
        >
          {/* 6-DIGIT INPUT BOXES */}
          <div className="flex justify-between gap-2 sm:gap-4">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                maxLength="1"
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 text-center border border-gray-300 rounded-lg text-lg sm:text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            ))}
          </div>
            <div className="text-red-600 text-lg  text-center">60s</div>
          <div className="text-center text-sm sm:text-base">
            Didn’t receive code?{" "}
            <button
              type="button"
              onClick={handleResend}
              className="text-green-500 hover:underline"
            >
              Resend code
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || code.join("").length < 6}
            className="w-full border-2 border-green-500 rounded-2xl text-green-600 py-3 font-medium hover:bg-green-500 hover:text-white transition duration-300"
          >
            {isSubmitting ? "Verifying..." : "Verify"}
          </button>
        </form>
      </div>
    </div>
  );
}
