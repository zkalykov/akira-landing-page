import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: "login" | "signup";
}

export const AuthModal = ({ isOpen, onClose, defaultTab = "login" }: AuthModalProps) => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">(defaultTab);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store user info
    const user = {
      name: name || email.split('@')[0] || "User",
      email: email,
      plan: "Free Plan"
    };
    localStorage.setItem("akira_user", JSON.stringify(user));

    onClose();
    navigate("/dashboard");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 px-4"
          >
            {/* Close Button - Outside */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-4 p-2 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
            >
              <X size={24} />
            </button>

            {/* Card Content */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/20">
              {/* Header / Tabs */}
              <div className="flex border-b border-gray-100">
                <button
                  onClick={() => setActiveTab("login")}
                  className={cn(
                    "flex-1 py-4 text-sm font-medium transition-colors relative",
                    activeTab === "login" ? "text-primary bg-primary/5" : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  )}
                >
                  Log In
                  {activeTab === "login" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("signup")}
                  className={cn(
                    "flex-1 py-4 text-sm font-medium transition-colors relative",
                    activeTab === "signup" ? "text-primary bg-primary/5" : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  )}
                >
                  Sign Up
                  {activeTab === "signup" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </button>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    {activeTab === "login" ? "Welcome back" : "Create an account"}
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">
                    {activeTab === "login"
                      ? "Enter your details to access your account"
                      : "Enter your details to get started for free"}
                  </p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  {activeTab === "signup" && (
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all mt-4"
                  >
                    {activeTab === "login" ? "Log In" : "Sign Up"}
                  </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                  {activeTab === "login" ? (
                    <>
                      Don't have an account?{" "}
                      <button
                        onClick={() => setActiveTab("signup")}
                        className="font-medium text-primary hover:underline"
                      >
                        Sign up
                      </button>
                    </>
                  ) : (
                    <>
                      Already have an account?{" "}
                      <button
                        onClick={() => setActiveTab("login")}
                        className="font-medium text-primary hover:underline"
                      >
                        Log in
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
