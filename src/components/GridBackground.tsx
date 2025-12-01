import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const GridBackground = () => {
  const [beams, setBeams] = useState<{ id: number; x: number; y: number; direction: "horizontal" | "vertical" }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const direction = Math.random() > 0.5 ? "horizontal" : "vertical";
      const x = Math.random() * 100;
      const y = Math.random() * 100;

      setBeams((prev) => [...prev, { id, x, y, direction } as { id: number; x: number; y: number; direction: "horizontal" | "vertical" }].slice(-5)); // Keep max 5 beams
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#FAFAFA]">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 100%)"
        }}
      />

      {/* Animated Beams */}
      {beams.map((beam) => (
        <motion.div
          key={beam.id}
          initial={{ 
            opacity: 0,
            left: beam.direction === "horizontal" ? "0%" : `${beam.x}%`,
            top: beam.direction === "vertical" ? "0%" : `${beam.y}%`,
            width: beam.direction === "horizontal" ? "100px" : "1px",
            height: beam.direction === "vertical" ? "100px" : "1px",
          }}
          animate={{ 
            opacity: [0, 1, 0],
            left: beam.direction === "horizontal" ? "100%" : `${beam.x}%`,
            top: beam.direction === "vertical" ? "100%" : `${beam.y}%`,
          }}
          transition={{ duration: 3, ease: "linear" }}
          className="absolute bg-gradient-to-r from-transparent via-black/10 to-transparent"
          style={{
            background: beam.direction === "horizontal" 
              ? "linear-gradient(90deg, transparent, rgba(0,0,0,0.2), transparent)" 
              : "linear-gradient(180deg, transparent, rgba(0,0,0,0.2), transparent)"
          }}
        />
      ))}

      {/* Subtle Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent opacity-50" />
    </div>
  );
};
