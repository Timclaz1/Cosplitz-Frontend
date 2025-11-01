import { CheckCircle } from "lucide-react";
import loginlogo from "../assets/loginmain.jpg";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function PasswordResetSuccess() {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate("/login"); // redirect to login page
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white/40 px-6 sm:px-10 lg:px-5 py-5 overflow-hidden">
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
      <div className="relative flex w-full h-full lg:w-1/2 flex-col justify-center items-center bg-white overflow-y-auto px-4 sm:px-8 md:px-16 lg:px-20 py-8">
        {/* Logo */}
        <div className="absolute top-0 pl-10 md:pl-20 mt-4 w-full flex justify-start ">
          <img src={logo} alt="Logo" className="w-24 sm:w-28" />
        </div>

        {/* Success Content */}
        <div className="flex flex-col items-center text-center space-y-6 ">
          <h1 className="text-2xl lg:text-7xl md:text-5xl sm:text-4xl font-semibold text-gray-900">
            Congratulations! 
          </h1>
          <p className="text-gray-500 text-2xl sm:text-lg max-w-lg">
           Your password has been successfully updated, please log in again with your latest password.
          </p>

          <button
            onClick={handleGoToLogin}
            className="mt-6 w-full  border-2 bg-green-600 text-white rounded-2xl  py-3 font-medium  transition duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
