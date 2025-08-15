import { useTheme } from "./ThemeProvider";

function Theme() {
  const { theme, setTheme } = useTheme();
  if (theme === true) {
    document.body.style.background = "white";
  } else {
    document.body.style.background = "black";
  }
  return (
    <>
    <button
      onClick={() =>   setTheme(theme === false ? true : false)}
     
        >
      <span
        className={`w-4 sm:w-6 h-4 sm:h-6 rounded-full transition-all hover:bg-red-800 duration-500 ${
          theme === true && "translate-x-[22px]"}   ${theme === true ? "bg-black" : "bg-white"}`}
      >
      </span>
    </button>
        </>
  );
}

export default Theme;
