// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Public pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Onboarding from "./pages/Onboarding";
import Identify from "./pages/Identification";
import Forget from "./pages/ForgetPassword";
import VerifyEmail from "./pages/VerifyEmail";
import ConfirmPassword from "./pages/ConfirmPassword";
import PasswordResetSuccess from "./pages/PasswordResetSuccess";
import OnboardingSteps from "./pages/OnboardingSteps";
import NotFound from "./pages/Notfound"; // Fixed: Added semicolon

// Dashboard pages
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import Overview from "./pages/Dashboard/Overview";
import Analytics from "./pages/Dashboard/Analytics";
import Settings from "./pages/Dashboard/Settings";
import Payment from "./pages/Dashboard/Payment";
import CreateSplitzPage from "./pages/Dashboard/CreateSplitz";

import "./App.css";

export default function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/onboard" element={<Onboarding />} />
      <Route path="/identify" element={<Identify />} />
      <Route path="/forgot-password" element={<Forget />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/confirm-password" element={<ConfirmPassword />} />
      <Route path="/password-reset-success" element={<PasswordResetSuccess />} />
      <Route path="/onboarding-steps" element={<OnboardingSteps />} />

      {/* Dashboard routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Overview />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="create-split" element={<CreateSplitzPage />} /> {/* Fixed: Consistent naming */}
        <Route path="payment" element={<Payment />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* 404 Catch-all route - MUST BE LAST */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}