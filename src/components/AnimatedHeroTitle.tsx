import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface AnimatedHeroTitleProps {
  className?: string;
}

export const AnimatedHeroTitle = ({ className }: AnimatedHeroTitleProps) => {
  const lines = [
    { text: "Build your dream", highlight: false },
    { text: "website with just", highlight: true, highlightWord: "website" },
    { text: "one prompt.", highlight: false },
  ];

  return (
    <div className={cn("relative flex flex-col items-center justify-center px-12", className)}>
      {/* Continuous Vertical Lines */}
      <motion.div
        className="absolute left-0 -top-[60px] w-[1px] border-l border-dashed"
        initial={{ height: 0 }}
        animate={{ height: "calc(100% + 140px)" }}
        transition={{ height: { duration: 1.5, ease: "easeInOut" } }}
        style={{ borderColor: "#b91c1c" }}
      />
      <motion.div
        className="absolute right-0 -top-[30px] w-[1px] border-l border-dashed"
        initial={{ height: 0 }}
        animate={{ height: "calc(100% + 60px)" }}
        transition={{ height: { duration: 1.5, ease: "easeInOut" } }}
        style={{ borderColor: "#b91c1c" }}
      />

      {/* Top Left Circle Decoration */}
      <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <defs>
            <mask id="circle-mask">
              <motion.path
                d="M 50 90 A 40 40 0 1 1 90 50"
                fill="none"
                stroke="white"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
              />
            </mask>
          </defs>
          <motion.path
            d="M 50 90 A 40 40 0 1 1 90 50"
            fill="none"
            strokeWidth="1"
            strokeDasharray="4 2"
            mask="url(#circle-mask)"
            initial={{ stroke: "#b91c1c" }}
            animate={{ stroke: "#b91c1c" }}
            transition={{ duration: 0.5 }}
          />
        </svg>
      </div>

      {lines.map((line, i) => (
        <div key={i} className="relative w-full text-center">
          {/* Text Content */}
          <motion.h1
            className="relative z-10 px-6 py-2 text-4xl font-bold tracking-tighter sm:text-7xl md:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {line.highlight ? (
              <>
                {line.text.split(line.highlightWord!)[0]}
                <span className="text-primary">{line.highlightWord}</span>
                {line.text.split(line.highlightWord!)[1]}
              </>
            ) : (
              line.text
            )}
          </motion.h1>

          {/* Horizontal Lines */}
          {i === 0 && (
            <motion.div
              className="absolute -left-[78px] top-0 h-[1px] border-t border-dashed"
              initial={{ width: 0 }}
              animate={{ width: "calc(100% + 156px)" }}
              transition={{ width: { duration: 1, delay: 0.5, ease: "easeInOut" } }}
              style={{ borderColor: "#b91c1c" }}
            />
          )}
          <motion.div
            className="absolute -left-[78px] bottom-0 h-[1px] border-t border-dashed"
            initial={{ width: 0 }}
            animate={{ width: "calc(100% + 156px)" }}
            transition={{ width: { duration: 1, delay: 0.5 + i * 0.2, ease: "easeInOut" } }}
            style={{ borderColor: "#b91c1c" }}
          />
        </div>
      ))}
    </div>
  );
};
