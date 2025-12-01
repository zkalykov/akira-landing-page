import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AnimatedHeroTitle } from "./AnimatedHeroTitle";
import { AuthModal } from "./AuthModal";

export const Hero = () => {
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useState(() => {
    const storedUser = localStorage.getItem("akira_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  });

  const handleTryAkira = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <section id="hero" className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden px-6 pt-32 md:px-12 md:pt-0">
      {/* Background Ornaments Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 20 Q120 40 100 60 Q80 40 100 20 M100 60 Q120 80 100 100 Q80 80 100 60 M40 100 Q60 120 80 100 Q60 80 40 100 M120 100 Q140 120 160 100 Q140 80 120 100 M100 140 Q120 160 100 180 Q80 160 100 140' fill='%238B0000' /%3E%3Ccircle cx='100' cy='100' r='15' fill='%23DEB887' /%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat'
        }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        <AnimatedHeroTitle className="mb-8" />

        <motion.p
          className="mx-auto mb-12 max-w-2xl text-lg text-gray-600 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Akira is the world's most advanced AI website builder. Describe your vision, and watch it come to life in seconds.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={handleTryAkira}
            className="group flex items-center gap-2 rounded-full bg-black px-8 py-4 text-lg font-medium text-white transition-all hover:bg-gray-800 hover:scale-105 active:scale-95"
          >
            {user ? "Go to Dashboard" : "Try Akira"}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="#"
            className="rounded-full border border-gray-200 bg-white px-8 py-4 text-lg font-medium text-gray-900 transition-all hover:border-gray-400 hover:bg-gray-50 hover:scale-105 active:scale-95"
          >
            Read Research
          </a>
        </motion.div>
      </div>



      {/* Ornament Image */}
      <motion.img
        src="/kg-ornament.png"
        alt="Kyrgyz Ornament"
        className="absolute bottom-0 left-0 z-20 hidden md:block md:w-96"
        initial={{ opacity: 0, x: -50, rotate: -180 }}
        animate={{ opacity: 1, x: 0, rotate: -180 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        defaultTab="signup"
      />
    </section>
  );
};
