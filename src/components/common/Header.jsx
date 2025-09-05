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
        className={`absolute  inset-0 transition-all duration-300  rounded-b-3xl
          ${scrolled ? "bg-white/3 backdrop-blur-2xl " : "bg-transparent"}`}
      ></div>

      {/* ✅ Limited width container */}
      <div className="relative container   font-inter py-[16px]  flex items-center justify-between">
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
