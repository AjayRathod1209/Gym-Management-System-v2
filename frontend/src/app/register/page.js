"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Dumbbell, ArrowLeft, Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Simple validation
    if (!fullName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (fullName.trim().split(" ").length < 2) {
      setError("Please enter your full first and last name.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!agreeToTerms) {
      setError("You must agree to the Terms & Conditions.");
      return;
    }

    setIsSubmitting(true);

    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      // Clean form fields
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAgreeToTerms(false);
      // Redirect to Login Page
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center relative px-4 overflow-hidden font-sans py-12">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Back to Home Button */}
      <a
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-400 hover:text-primary font-medium tracking-wide uppercase transition-colors duration-300 group z-10 text-sm"
      >
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </a>

      {/* Register Box Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md glass border border-white/10 rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative z-10"
      >
        {/* Brand / Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="p-3 bg-primary rounded-xl text-black mb-3 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            <Dumbbell className="h-8 w-8 stroke-[2.5]" />
          </div>
          <h2 className="text-2xl font-black tracking-wider uppercase text-white">
            Vigor<span className="text-primary font-light">fit</span>
          </h2>
          <p className="text-gray-400 font-light text-xs uppercase tracking-widest mt-1">
            Create your account
          </p>
        </div>

        {/* Form Messages */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-lg font-medium"
          >
            {error}
          </motion.div>
        )}

        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-primary/10 border border-primary/20 text-primary text-xs rounded-lg font-medium"
          >
            Account created successfully! Welcome to VigorFit.
          </motion.div>
        )}

        {/* Register Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name Input */}
          <div className="space-y-1">
            <label className="text-xs uppercase font-bold tracking-widest text-gray-400">
              Full Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                <User className="h-4 w-4" />
              </span>
              <input
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                disabled={isSubmitting || success}
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="space-y-1">
            <label className="text-xs uppercase font-bold tracking-widest text-gray-400">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                <Mail className="h-4 w-4" />
              </span>
              <input
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                disabled={isSubmitting || success}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1">
            <label className="text-xs uppercase font-bold tracking-widest text-gray-400">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                <Lock className="h-4 w-4" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-lg py-2.5 pl-10 pr-10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                disabled={isSubmitting || success}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-white transition-colors"
                tabIndex="-1"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="space-y-1">
            <label className="text-xs uppercase font-bold tracking-widest text-gray-400">
              Confirm Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                <Lock className="h-4 w-4" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-lg py-2.5 pl-10 pr-10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                disabled={isSubmitting || success}
              />
            </div>
          </div>

          {/* Agree to terms checkbox */}
          <div className="flex items-start pt-2">
            <input
              id="terms-conditions"
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="mt-0.5 h-4 w-4 accent-primary rounded bg-black/40 border-white/10 focus:ring-0 focus:ring-offset-0 focus:outline-none"
              disabled={isSubmitting || success}
            />
            <label htmlFor="terms-conditions" className="ml-2.5 text-xs text-gray-400 select-none">
              I agree to the{" "}
              <a href="#" className="text-primary hover:underline transition-colors">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary hover:underline transition-colors">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 mt-3 bg-primary text-black font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-green-600 transition-colors duration-300 shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] flex items-center justify-center disabled:opacity-50"
            disabled={isSubmitting || success}
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
            ) : (
              "Create Account"
            )}
          </motion.button>
        </form>

        {/* Footer Link to Login Page */}
        <div className="mt-6 pt-5 border-t border-white/5 text-center">
          <p className="text-xs text-gray-400">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-primary font-bold hover:underline hover:text-green-400 transition-colors"
            >
              Sign In
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
