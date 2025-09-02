import { useTheme } from "../Themetoggel/ThemeProvider";

const Button = ({title}) => {
    const {theme}=useTheme()
  return (
    <button className={`${theme ? "bg-white/5 text-customBlack hover:bg-black/10 border-black/10" :"bg-white/5 text-gray-300 hover:bg-white/10 border-white/10"} sm:px-4 px-3 py-1 sm:py-2   rounded-full font-poppins  backdrop-blur-sm border  text-sm  transition-colors`}>
      {title}
    </button>
  );
};

export default Button;