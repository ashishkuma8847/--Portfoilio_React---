import { motion } from "framer-motion";

const Themep = ({ data, setdata }) => {
  return (
    <div
      className="relative flex w-full max-w-sm sm:max-w-md md:max-w-lg font-poppins 
      h-12 sm:h-14 md:h-[72px] justify-between items-center rounded-full 
      bg-white/10 backdrop-blur-md shadow-lg p-1"
    >
      {/* Projects Button */}
      <button
        className={`relative z-10 h-full w-1/2 flex justify-center items-center gap-2 
        px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base md:text-lg font-medium transition-colors
        ${data === 0 ? "text-white" : "text-slate-400"}`}
        onClick={() => setdata(0)}
      >
        Projects
      </button>

      {/* Skills Button */}
      <button
        className={`relative z-10 h-full w-1/2 flex justify-center items-center gap-2 
        px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base md:text-lg font-medium transition-colors
        ${data === 1 ? "text-white" : "text-slate-400"}`}
        onClick={() => setdata(1)}
      >
        Skills
      </button>

      {/* Animated Background */}
      <div
        className={`absolute inset-0 z-0 flex ${
          data === 1 ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full 
          bg-gradient-to-r from-[#21b4dd] to-[#09b0c0] shadow-md"
        />
      </div>
    </div>
  );
};

export default Themep;
