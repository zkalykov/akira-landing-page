import { Sparkles, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const CreateProjectInput = () => {
  const [prompt, setPrompt] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  
  const [shadowBlur, setShadowBlur] = useState(20);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Random blur between 20px and 60px
      setShadowBlur(Math.floor(Math.random() * 40) + 20);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [shadowBlur]);

  const handleGenerate = () => {
    if (prompt.trim()) {
      window.location.href = `https://makeakira.vercel.app?q=${encodeURIComponent(prompt)}`;
    }
  };

  return (
    <motion.div 
      className={`
        relative bg-white rounded-2xl p-2 transition-all duration-500 ease-out
        ${isFocused ? 'scale-[1.01] ring-1 ring-black/5' : 'border border-gray-100'}
      `}
      animate={{
        boxShadow: `0 0 ${shadowBlur}px #7f1d1d60` // Dark red with opacity
      }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative flex items-center">
        <div className="absolute left-5 text-red-900 transition-colors duration-300">
          <Sparkles size={22} className={isFocused ? "animate-pulse" : ""} />
        </div>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Describe your dream website..."
          className="w-full pl-14 pr-16 sm:pr-36 py-5 text-lg bg-transparent border-none outline-none placeholder:text-gray-300 text-gray-900 font-medium relative z-10"
        />
        <button 
          onClick={handleGenerate}
          className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2 px-3 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 z-20 bg-red-900 text-white shadow-lg shadow-red-900/20 hover:scale-105 hover:shadow-red-900/30 disabled:opacity-70 disabled:hover:scale-100"
          disabled={prompt.length === 0}
        >
          <span className="hidden sm:inline">Generate</span>
          <ArrowRight size={18} />
        </button>
      </div>
      
      {/* Quick Suggestions */}
      <div className={`
        overflow-hidden transition-all duration-500 ease-in-out
        ${isFocused ? 'max-h-20 opacity-100 mt-2 pt-2 border-t border-gray-50' : 'max-h-0 opacity-0'}
      `}>
        <div className="flex items-center gap-2 px-4 overflow-x-auto pb-2 scrollbar-hide">
          <span className="text-xs font-semibold text-gray-400 whitespace-nowrap uppercase tracking-wider">Try:</span>
          {["E-commerce Store", "SaaS Landing Page", "Personal Blog", "Restaurant Menu"].map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setPrompt(suggestion)}
              className="px-3 py-1.5 rounded-full bg-gray-50 text-xs font-medium text-gray-600 hover:bg-black hover:text-white transition-all whitespace-nowrap border border-gray-100"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
