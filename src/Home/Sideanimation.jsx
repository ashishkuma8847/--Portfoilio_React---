import  { useState } from 'react'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useTheme } from '../components/common/Themetoggel/ThemeProvider';

const Sideanimation = () => {
        // const { theme } = useTheme();

      const [isHovering, setIsHovering] = useState(false);
 const lottieOptions = {
    src: "https://lottie.host/58753882-bb6a-49f5-a2c0-950eda1e135a/NLbpVqGegK.lottie",
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      progressiveLoad: true,
    },
    style: { width: "100%", height: "100%" },
    className: "w-[750px] h-[600px]" // ✅ only width/height
  };

  return (
    <>
    <div
      className={` w-full py-[10%] sm:py-0 lg:w-1/2 h-auto lg:h-[600px] xl:h-[750px] relative flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative w-full opacity-90">
        {/* Background Gradient Blur */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-3xl blur-2xl transition-all duration-700 ease-in-out ${
            isHovering ? "opacity-50 scale-105" : "opacity-20 scale-100"
          }`}
        ></div>

        {/* Main Lottie Animation */}
        <div
          className={`relative justify-center flex z-10 opacity-90 transform transition-transform duration-500 will-change-transform ${
            isHovering ? "scale-105 rotate-2" : "scale-100"
          }`}
        >
          <DotLottieReact {...lottieOptions} />
        </div>

        {/* Extra Glow Effect */}
        <div
          className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
            isHovering ? "opacity-50" : "opacity-20"
          }`}
        >
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-2xl animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite] transition-all duration-700 ${
              isHovering ? "scale-110" : "scale-100"
            }`}
          ></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Sideanimation