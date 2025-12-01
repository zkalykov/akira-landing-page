import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { AuthModal } from "./AuthModal";
import { useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<"login" | "signup">("login");
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState<any>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Check for user on mount
  useState(() => {
    const storedUser = localStorage.getItem("akira_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  });

  const openAuthModal = (tab: "login" | "signup") => {
    setAuthModalTab(tab);
    setIsAuthModalOpen(true);
  };

  const handleNavClick = (href: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Showcase", href: "#hero" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Enterprise", href: "#enterprise" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-40 flex h-16 items-center justify-between px-6 transition-colors duration-300 md:px-12",
          isScrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-100" : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-8">
          <a href="/" className="text-xl font-bold tracking-tighter text-black">
            AKIRA
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <button
              onClick={() => navigate("/dashboard")}
              className="hidden md:block rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-black/20"
            >
              Go to Dashboard
            </button>
          ) : (
            <>
              <button 
                onClick={() => openAuthModal("login")}
                className="hidden md:block text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                Log in
              </button>
              <button
                onClick={() => openAuthModal("signup")}
                className="hidden md:block rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95"
              >
                Try Akira
              </button>
            </>
          )}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 p-6 md:hidden flex flex-col gap-4 shadow-lg"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-base font-medium text-gray-600 hover:text-black text-left"
              >
                {link.name}
              </button>
            ))}
            <hr className="border-gray-100" />
            {user ? (
              <button
                onClick={() => {
                  navigate("/dashboard");
                  setIsMobileMenuOpen(false);
                }}
                className="rounded-full bg-black px-4 py-2 text-center text-sm font-medium text-white shadow-lg shadow-black/20"
              >
                Go to Dashboard
              </button>
            ) : (
              <>
                <button 
                  onClick={() => {
                    openAuthModal("login");
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-base font-medium text-gray-600 hover:text-black text-left"
                >
                  Log in
                </button>
                <button
                  onClick={() => {
                    openAuthModal("signup");
                    setIsMobileMenuOpen(false);
                  }}
                  className="rounded-full bg-primary px-4 py-2 text-center text-sm font-medium text-white"
                >
                  Try Akira
                </button>
              </>
            )}
          </motion.div>
        )}
      </motion.nav>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        defaultTab={authModalTab}
      />
    </>
  );
};
