import { Sparkles, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const CreateProjectInput = () => {
  const [prompt, setPrompt] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  
  const colors = [
    { hex: "#ef4444", shadow: "rgba(239, 68, 68, 0.5)" }, // Red
    { hex: "#f97316", shadow: "rgba(249, 115, 22, 0.5)" }, // Orange
    { hex: "#eab308", shadow: "rgba(234, 179, 8, 0.5)" }, // Yellow
    { hex: "#22c55e", shadow: "rgba(34, 197, 94, 0.5)" }, // Green
    { hex: "#06b6d4", shadow: "rgba(6, 182, 212, 0.5)" }, // Cyan
    { hex: "#3b82f6", shadow: "rgba(59, 130, 246, 0.5)" }, // Blue
    { hex: "#8b5cf6", shadow: "rgba(139, 92, 246, 0.5)" }, // Violet
    { hex: "#d946ef", shadow: "rgba(217, 70, 239, 0.5)" }, // Fuchsia
  ];

  const [colorIndex, setColorIndex] = useState(0);
  const [shadowBlur, setShadowBlur] = useState(20);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
      // Random blur between 20px and 60px
      setShadowBlur(Math.floor(Math.random() * 40) + 20);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [colorIndex]);

  return (
    <motion.div 
      className={`
        relative bg-white rounded-2xl p-2 transition-all duration-500 ease-out
        ${isFocused ? 'scale-[1.01] ring-1 ring-black/5' : 'border border-gray-100'}
      `}
      animate={{
        boxShadow: `0 0 ${shadowBlur}px ${colors[colorIndex].hex}60` // 60 is hex opacity ~37%
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
          className="w-full pl-14 pr-36 py-5 text-lg bg-transparent border-none outline-none placeholder:text-gray-300 text-gray-900 font-medium relative z-10"
        />
        <button 
          className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 z-20 bg-red-900 text-white shadow-lg shadow-red-900/20 hover:scale-105 hover:shadow-red-900/30 disabled:opacity-70 disabled:hover:scale-100"
          disabled={prompt.length === 0}
        >
          <span>Generate</span>
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
