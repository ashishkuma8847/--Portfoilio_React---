import { useState, useEffect } from "react";
import Theme from "../Themetoggel/Themebutton";
import Fontui from "../ui/Fontui";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`container font-inter py-[16px] px-4 flex items-center justify-between 
          fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] z-50 
          transition-all duration-300 
          ${scrolled ? "bg-white/30 dark:bg-black/30 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
      >
        {/* Logo */}
        <Fontui
          words={["dev", "des"]}
          className="text-lg md:text-3xl"
          inspan="h."
          outofspan="Ashis"
        />

        {/* Theme Toggle */}
        <Theme />
      </div>
    </>
  );
}

export default Header;
