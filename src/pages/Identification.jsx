import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInfoSchema,addressSchema,documentSchema } from "../dataSchema";
import logo from "../assets/login.jpg"
export default function Identification() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  // ✅ React Hook Form setup
  const form = useForm({
    resolver: zodResolver(
      step === 1 ? personalInfoSchema : step === 2 ? addressSchema : documentSchema
    ),
    mode: "onTouched",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data) => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      console.log("✅ Form submitted successfully:", data);
      alert("Form submitted successfully!");
    }
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const progress = (step / totalSteps) * 100;

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <div className="flex justify-start items-center py-4 pl-7">
        <img src={login}/>
      </div>
      <div className="w-full max-w-lg border border-slate-100 bg-white shadow-md rounded-2xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Identity Verification
          </h2>
          <p className="text-gray-500 text-sm">
            Verify your identity and get started
          </p>
        </div>

        {/* Progress Bar */}
        <div className="relative mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-sm font-semibold ${
                  num <= step ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                {num}
              </div>
            ))}
          </div>
          <div className="absolute top-4 left-4 right-4 h-1 bg-gray-200 rounded-full -z-10">
            <div
              className="h-1 bg-green-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-600 mt-3">
            <span>Personal Info</span>
            <span>Address</span>
            <span>Documents</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Step 1 */}
          {step === 1 && (
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  {...register("firstName")}
                  placeholder="Enter your first name"
                  className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  {...register("lastName")}
                  placeholder="Enter your last name"
                  className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Nationality
                </label>
                <input
                  type="text"
                  {...register("nationality")}
                  placeholder="Enter your nationality"
                  className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500"
                />
                {errors.nationality && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.nationality.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Enter your email address"
                  className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  {...register("city")}
                  placeholder="Enter your city"
                  className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.city.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  District
                </label>
                <input
                  type="text"
                  {...register("district")}
                  placeholder="Enter your district"
                  className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500"
                />
                {errors.district && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.district.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Full Address
                </label>
                <input
                  type="text"
                  {...register("fullAddress")}
                  placeholder="Enter your full address"
                  className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500"
                />
                {errors.fullAddress && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.fullAddress.message}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Document Type
                </label>
                <select
                  {...register("documentType")}
                  className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select document</option>
                  <option value="National ID">National ID Card</option>
                  <option value="Driver’s Licence">Driver’s Licence</option>
                  <option value="International Passport">
                    International Passport
                  </option>
                </select>
                {errors.documentType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.documentType.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">
                  Upload File
                </label>
                <input
                  type="file"
                  {...register("file")}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500"
                />
                {errors.file && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.file.message}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 gap-4">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="px-6 py-2 w-full rounded-lg text-green-600 border border-green-600 font-medium hover:bg-green-50 transition"
              >
                BACK
              </button>
            )}

            <button
              type="submit"
              className="px-6 py-2 w-full rounded-lg text-white bg-green-600 font-medium hover:bg-green-700 transition"
            >
              {step === totalSteps ? "FINISH" : "NEXT"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
