import { useTheme } from "./ThemeProvider";

function Theme() {
  const { theme, setTheme } = useTheme();
  if (theme === true) {
    document.body.style.background = "white";
  } else {
    document.body.style.background = "black";
  }
  return (
    <button
      onClick={() => {
        setTheme(theme === false ? true : false);
      }}
      className={`theme-animation p-[3px] max-w-[45px] md:max-w-[54px] w-full bg-transparent border-[1px] hover:border-red-800 border-solid flex rounded-full fixed bottom-2 sm:bottom-5 right-2 sm:right-5 z-40 transition-all duration-500 ${
        theme === true ? "border-black" : "border-white"
      }`}
    >
      <span
        className={`w-4 sm:w-6 h-4 sm:h-6 rounded-full transition-all hover:bg-red-800 duration-500 ${
          theme === true && "translate-x-[22px]"
        }  
        ${theme === true ? "bg-black" : "bg-white"}
        `}
      >
      </span>
    </button>
  );
}

export default Theme;
