import { useState } from "react";
import { useTheme } from "../components/common/Themetoggel/ThemeProvider";
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

function Home() {
    const { theme } = useTheme();
    const [isHovering, setIsHovering] = useState(false)
    const lottieOptions = {
        src: "https://lottie.host/58753882-bb6a-49f5-a2c0-950eda1e135a/NLbpVqGegK.lottie",
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
            progressiveLoad: true,
        },
        style: { width: "100%", height: "100%" },
        className: `w-[550px] h-[400px] transition-all duration-500 ${isHovering
                ? "scale-[180%] sm:scale-[160%] md:scale-[150%] lg:scale-[145%] rotate-2"
                : "scale-[175%] sm:scale-[155%] md:scale-[145%] lg:scale-[140%]"
            }`
    };
    return (
        <>
            <section className={`${theme ? "text-black" : "text-white"}`}>
                <div className=" container">
                    <div className="flex justify-between w-full items-center ">
                        <div className="">

                        </div>
                        <div className="w-full py-[10%] sm:py-0 lg:w-1/2 h-auto lg:h-[600px] xl:h-[750px] relative flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <div className="relative w-full opacity-90">
                                <div className={`absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-3xl blur-3xl transition-all duration-700 ease-in-out ${isHovering ? "opacity-50 scale-105" : "opacity-20 scale-100"
                                    }`}>
                                </div>

                                <div className={`relative lg:left-12 z-10 w-full opacity-90 transform transition-transform duration-500 ${isHovering ? "scale-105" : "scale-100"
                                    }`}>
                                    <DotLottieReact {...lottieOptions} />
                                </div>

                                <div className={`absolute inset-0 pointer-events-none transition-all duration-700 ${isHovering ? "opacity-50" : "opacity-20"
                                    }`}>
                                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] transition-all duration-700 ${isHovering ? "scale-110" : "scale-100"
                                        }`}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}
export default Home