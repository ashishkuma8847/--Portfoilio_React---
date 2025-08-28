import { motion } from "framer-motion";
import { useState } from "react";

const Theme = () => {
  const [theme, setTheme ] = useState(false);

 
  return (
    <div className="relative flex w-[354px] font-poppins h-[72px] justify-between items-center rounded-full bg-white/10 backdrop-blur-md shadow-lg p-1">
      {/* Light Button */}
      <button
        className={`relative z-10 h-[72px] w-1/2 justify-center flex items-center gap-2 px-4  py-2 text-lg font-semibold transition-colors ${
          theme === true ? "text-white" : "text-slate-400"
        }`}
        onClick={() => setTheme(true)}
      >
        Projects
      </button>

      {/* Dark Button */}
      <button
        className={`relative z-10 flex h-[72px] w-1/2 justify-center items-center gap-2 px-4 py-2 text-lg font-semibold transition-colors ${
          theme === false ? "text-white" : "text-slate-400"
        }`}
        onClick={() => setTheme(false)}
      >
        Skills
      </button>

      {/* Animated Background */}
      <div
        className={`absolute inset-0 z-0 flex ${
          theme === false ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-[72px] w-1/2 rounded-full bg-gradient-to-r from-[#21b4dd] to-[#09b0c0] shadow-md"
        />
      </div>
    </div>
  );
};

export default Theme;
