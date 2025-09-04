import { useState, useEffect } from "react";
import Theme from "../Themetoggel/Themebutton";
import Fontui from "../ui/Fontui";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 39);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* ✅ Full section blur background */}
      <div
        className={`absolute inset-0 h-full transition-all duration-300  rounded-b-3xl
          ${scrolled ? "bg-white/30 dark:bg-black/30 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
      ></div>

      {/* ✅ Limited width container */}
      <div className="relative mx-auto w-full max-w-[1520px] font-inter py-[16px] px-4 flex items-center justify-between">
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
    </header>
  );
}

export default Header;
