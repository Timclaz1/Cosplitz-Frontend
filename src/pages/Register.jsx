import { useState } from "react";
import { Eye, EyeOff, Check } from "lucide-react";
import loginlogo from "../assets/login.jpg";
import logo from "../assets/logo.svg";
import { FcGoogle } from "react-icons/fc";
import { PiAppleLogoBold } from "react-icons/pi";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    nationality: "",
    password: "",
    agreeToTerms: false,
  });

  const [currentStep, setCurrentStep] = useState(1); // Active step

  const steps = [
    { id: 1, label: "Account" },
    { id: 2, label: "Details" },
    { id: 3, label: "Finish" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50 p-2 overflow-hidden">
      {/* === LEFT SIDE === */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#F8EACD] flex-col justify-center items-center rounded-xl p-4">
        <div className="max-w-md w-full flex flex-col items-center text-center space-y-4">
          <img
            src={loginlogo}
            alt="Illustration"
            className="w-full h-auto object-contain rounded-lg"
          />
          <div className="w-full bg-gradient-to-br from-[#FAF3E8] to-[#F8EACD] rounded-2xl flex flex-col justify-center items-center text-center p-4 shadow-sm">
            <h1 className="text-2xl font-semibold text-[#2D0D23] mb-2">
              Share Expenses & Resources in Real Time
            </h1>
            <p className="text-sm text-[#4B4B4B] leading-relaxed">
              Connect with students, travelers, and locals to effortlessly manage costs and resources, anonymously and securely.
            </p>
          </div>
        </div>
      </div>

      {/* === RIGHT SIDE === */}
      <div className="flex flex-1 flex-col items-center justify-start bg-white p-4 sm:p-6 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {/* Logo */}
        <div className="flex justify-start items-start w-full mb-4 pl-4 sm:pl-8">
          <img src={logo} alt="Logo" className="w-28" />
        </div>

<div className="flex justify-center items-center w-full py-6">
  <div className="flex items-center justify-center gap-3 sm:gap-5 max-w-lg mx-auto">
    {steps.map((step, index) => (
      <div key={step.id} className="flex items-center">
        {/* Step Circle */}
        <div
          className="flex flex-col items-center cursor-pointer group transition-all duration-300"
          onClick={() => setCurrentStep(step.id)}
        >
          <div
            className={`flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 rounded-full font-bold shadow-md transition-all duration-300 ${
              currentStep >= step.id
                ? "bg-green-500 text-white scale-110 shadow-lg"
                : "bg-gray-300 text-gray-600"
            }`}
          >
            {currentStep > step.id ? (
              <Check size={18} />
            ) : (
              <span>{step.id}</span>
            )}
          </div>
          <span
            className={`text-xs mt-2 font-medium ${
              currentStep >= step.id ? "text-green-600" : "text-gray-500"
            }`}
          >
            {step.label}
          </span>
        </div>

        {/* Line */}
        {index < steps.length - 1 && (
          <div
            className={`h-1 w-10 sm:w-20 mx-2 rounded transition-all duration-300 ${
              currentStep > step.id ? "bg-green-500" : "bg-gray-300"
            }`}
          ></div>
        )}
      </div>
    ))}
  </div>
</div>

        {/* Form Container */}
        <div className="w-full max-w-xl flex flex-col justify-center rounded-xl shadow-md border border-gray-100 shadow-gray-200 p-4 sm:p-6 bg-white">
          {/* === STEPS === */}


<div className="flex justify-between items-center">
          {/* === Next Step Button (for testing) === */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setCurrentStep((prev) => (prev < 3 ? prev + 1 : prev))}
              className="py-2 px-6 rounded-full bg-green-600 text-white text-sm hover:bg-green-700 transition"
            >
              Next Step
            </button>
          </div>
                    <div className="flex justify-center mb-6">
            <button
              onClick={() => setCurrentStep((prev) => (prev >1  ? prev - 1 : prev))}
              className="py-2 px-6 rounded-full bg-green-600 text-white text-sm hover:bg-green-700 transition"
            >
              Prev Step
            </button>
          </div>
</div>


          {/* === HEADER === */}
          <h1 className="text-2xl sm:text-3xl text-center font-bold text-gray-900 mb-1">
            Create Your Account
          </h1>
          <p className="text-gray-500 mb-4 text-sm text-center sm:text-base">
            Let’s get started with real-time cost sharing.
          </p>

          {/* === SOCIAL BUTTONS === */}
          <div className="grid grid-cols-1 gap-2 mb-4">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              <FcGoogle size={20} />
              <span className="text-gray-700 text-sm font-medium">Sign Up with Google</span>
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              <PiAppleLogoBold size={20} />
              <span className="text-gray-700 text-sm font-medium">Sign Up with Apple</span>
            </button>
          </div>

          {/* === DIVIDER === */}
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-white text-gray-500">Or</span>
            </div>
          </div>

          {/* === FORM === */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {["firstName", "lastName", "email", "nationality"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                  {field} <span className="text-red-500">*</span>
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`Enter your ${field}`}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  required
                />
              </div>
            ))}

            {/* === PASSWORD === */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-8 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* === TERMS === */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                required
              />
              <label className="text-sm text-gray-600">
                I agree to all{" "}
                <a href="#" className="text-green-600 hover:underline">
                  Terms
                </a>
                ,{" "}
                <a href="#" className="text-green-600 hover:underline">
                  Privacy
                </a>{" "}
                and{" "}
                <a href="#" className="text-green-600 hover:underline">
                  Fees
                </a>
              </label>
            </div>

            {/* === SUBMIT === */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition"
            >
              Create Account
            </button>

            {/* === FOOTER LINKS === */}
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <a href="#" className="text-green-600 hover:underline font-medium">
                Log In
              </a>
            </p>
            <p className="text-center text-sm">
              <a href="#" className="text-green-600 hover:underline">
                Proceed as Guest
              </a>
              <span className="text-gray-400 ml-2">(Limited Features)</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
