import { motion } from "framer-motion";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3  md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const Theme = () => {
  const [selected, setSelected] = useState("dark");
 
  return (

    <SliderToggle selected={selected} setSelected={setSelected} />
  );
};

const SliderToggle = ({ selected, setSelected }) => {
    const { theme, setTheme } = useTheme();
  if (theme === true) {
    document.body.style.background = "#dfdfdf";
  } else {
    document.body.style.background = "black";
  }
  return (
    <div className={`${theme ? "bg-[#ffffff2d]" :"bg-white/10"} relative backdrop-blur-md h-[37px] md:h-[42px] shadow-lg justify-between  flex w-[100px] md:w-fit  items-center rounded-full`}>


      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "light" ? "text-white" : "text-slate-300"
        }`}
        onClick={() => {
          setSelected("light");
          setTheme(true)
        }}
        
      >
        <FiSun className="relative z-10  text-lg md:text-sm" />
        <span className="relative md:block hidden z-10">Light</span>
      </button>


      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "dark" ? "text-white" : "text-slate-800"
        }`}
        onClick={() => {
          setSelected("dark");
          setTheme(false  )
        }}

      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
        <span className="relative md:block hidden z-10">Dark</span>
      </button>


      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full z-0 bg-customTeal"
        />
      </div>
    </div>
  );
};

export default Theme;