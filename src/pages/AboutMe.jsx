import AboutCard from "../components/common/Card/AboutCard";
import { useTheme } from "../components/common/Themetoggel/ThemeProvider";
import { IconArrowUpRight, IconCode, IconAward, IconTimezone } from '@tabler/icons-react';
import AOS from "aos";
import "aos/dist/aos.css";
function AboutMe() {
    AOS.init({
        duration: 1200,
        once: false,
        offset: 0,
      });
    const { theme } = useTheme();
    const data = [
        {
            ArrowUpRight: IconArrowUpRight,
            description: "Innovative web solutions crafted",
            label: "Total Projects",
            value: "13",
            Icon: IconCode
        },
        {
            ArrowUpRight: IconArrowUpRight,
            description: "Professional skills validated",
            label: "Certificates",
            value: "7",
            Icon: IconAward
        },
        {
            ArrowUpRight: IconArrowUpRight,
            description: "Continuous learning journey",
            label: "Years of Experience",
            value: "3",
            Icon: IconTimezone
        },
    ]

    return (
        <>
            <section className={`${theme ? "text-black" : "text-white"}`}>
                <div className="container ">
                    <div className="pl-[40px] mt-[80px] flex flex-col gap-[40px]">

                        <div className="flex justify-between items-center">
                            <div data-aos="fade-right" className="flex flex-col gap-[80px]">
                            <div className="flex justify-center   flex-col gap-5">
                                <h1 className="font-inter font-bold text-[48px] leading-10 ">Abo<span className="text-customTeal">ut Me</span></h1>
                                <div className="relative">
                                    <iframe title="data" className="w-[94px] -z-10 absolute left-[-52px] top-[-50px] h-[94px]" src="https://lottie.host/embed/49ef9e95-4631-42fe-a4d5-ed8bf3addcfc/YLuZni78Ue.lottie"></iframe>
                                    <h4 className="font-medium text-[20px]">Transforming ideas into digital experiences</h4>
                                </div>
                            </div>
                            <div  className="w-[500px]">
                                <div className="">
                                    <h1 className="font-bold text-[35px]">Hello, I<span className="text-customTeal">'m  Ashish</span>, a passionate <span className="text-customTeal">Full-Stack Web Developer.</span></h1>
                                    <div className="font-semibold text-[20px] tracking-wide">
                                        <h1>driven by the love for creating responsive and impactful web applications that not only look beautiful but also provide seamless performance and meaningful solutions.</h1>
                                    </div>
                                </div>
                            </div>

                            </div>
                            <div data-aos="fade-left" className="relative   group md:mr-[50px]">
                                <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
                                    <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />

                                    {/* Optimized overlay effects - disabled on mobile */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#12BBB6]/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />

                                    <img
                                        src="/Photo.png"
                                        alt="Profile"
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                                        loading="lazy"
                                    />

                                    {/* Advanced hover effects - desktop only */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
                                        <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex justify-between">
                            {
                                data.map((item, index) => (
                                    <div key={index + item} {...item}>
                                        <AboutCard pending={true} ArrowUpRight={item.ArrowUpRight} description={item.description} label={item.label} value={item.value} Icon={item.Icon} />
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutMe