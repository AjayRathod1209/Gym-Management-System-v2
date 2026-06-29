"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Dumbbell, ArrowLeft, Mail, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Simple validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Demo admin check
    if (email !== "admin@vigorfit.com" || password !== "admin123") {
      setError("Invalid administrator credentials.");
      return;
    }

    setIsSubmitting(true);

    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      // Redirect to Admin Dashboard
      router.push("/admin/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center relative px-4 overflow-hidden font-sans">
      {/* Decorative Red/Orange Accent Blur Spheres for Admin Area */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Back to Home Button */}
      <a
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-400 hover:text-primary font-medium tracking-wide uppercase transition-colors duration-300 group z-10 text-sm"
      >
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </a>

      {/* Admin Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md glass border border-red-500/10 rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative z-10"
      >
        {/* Brand / Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="p-3 bg-red-500/10 text-red-500 border border-red-500/20 rounded-xl mb-3 shadow-[0_0_20px_rgba(239,68,68,0.15)]">
            <ShieldCheck className="h-8 w-8 stroke-[2.5]" />
          </div>
          <h2 className="text-2xl font-black tracking-wider uppercase text-white">
            Vigor<span className="text-red-500 font-light">Admin</span>
          </h2>
          <p className="text-gray-400 font-light text-xs uppercase tracking-widest mt-1">
            Owner Management Control
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
            Administrator access granted! Redirecting...
          </motion.div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div className="space-y-1.5">
            <label className="text-xs uppercase font-bold tracking-widest text-gray-400">
              Admin Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                <Mail className="h-4 w-4" />
              </span>
              <input
                type="email"
                placeholder="admin@vigorfit.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 transition-colors"
                disabled={isSubmitting || success}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <label className="text-xs uppercase font-bold tracking-widest text-gray-400">
              Secret Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                <Lock className="h-4 w-4" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="admin123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-lg py-3 pl-10 pr-10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 transition-colors"
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

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3.5 mt-2 bg-red-500 text-white font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-red-600 transition-colors duration-300 shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] flex items-center justify-center disabled:opacity-50"
            disabled={isSubmitting || success}
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              "Sign In to Console"
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
