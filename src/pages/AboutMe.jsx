import AboutCard from "../components/Card/AboutCard";
import { useTheme } from "../components/Themetoggel/ThemeProvider";
import { IconArrowUpRight, IconCode, IconAward, IconTimezone } from '@tabler/icons-react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
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
                <div className="container">
                    {/* Main container with responsive padding */}
                    <div className="sm:pl-[40px] pt-[60px] sm:pt-[100px] sm:pb-[90px]  lg:h-screen justify-center flex flex-col gap-[20px] md:gap-[40px]">

                        {/* Flex container - responsive column/row */}
                        <div className="flex lg:flex-row flex-col lg:gap-0 gap-[40px] justify-between items-center">

                            {/* Left Section */}
                            <div data-aos="fade-right" className="flex flex-col md:gap-[30px] gap-[20px] w-full lg:w-1/2">
                                <div className="flex justify-center flex-col gap-5 text-left">
                                    <h1 className="font-inter font-bold text-[28px] sm:text-[34px] md:text-[48px] leading-tight">
                                        Abo<span className="text-customTeal">ut Me</span>
                                    </h1>
                                    <div className="relative">
                                        <iframe
                                            title="data"
                                            className="w-[64px] sm:w-[94px] h-[64px] sm:h-[94px] -z-10 absolute left-[-30px] sm:left-[-52px] top-[-30px] sm:top-[-50px]"
                                            src="https://lottie.host/embed/49ef9e95-4631-42fe-a4d5-ed8bf3addcfc/YLuZni78Ue.lottie">
                                        </iframe>
                                        <h4 className="font-medium text-[16px] sm:text-[18px] md:text-[20px]">
                                            Transforming ideas into digital experiences
                                        </h4>
                                    </div>
                                </div>

                                {/* About description */}
                                <div className="max-w-[500px] w-full">
                                    <div>
                                        <h1 className="font-bold text-[16px] sm:text-[20px] md:text-[28px] lg:text-[35px] leading-snug">
                                            Hello, I<span className="text-customTeal">'m Ashish</span>, a passionate
                                            <span className="text-customTeal"> Full-Stack Web Developer.</span>
                                        </h1>
                                        <p className="font-semibold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] tracking-wide mt-2">
                                            driven by the love for creating responsive and impactful web applications
                                            that not only look beautiful but also provide seamless performance and
                                            meaningful solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Section - Profile image */}
                            <div data-aos="fade-left" className="relative group md:mr-[50px] w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px]">
                                <div className="w-full h-full rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
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

                        {/* Stats Section (commented out for now) */}
                        <div className="flex justify-between w-full z-0">
                            <Swiper
                                modules={[Autoplay]} 
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false, 
                                }}
                                breakpoints={{
                                    320: { 
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    778: { 
                                        slidesPerView: 1.5,
                                        spaceBetween: 10,
                                    },
                                    1026: { 
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    1536: { 
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                }}
                                loop={true}
                                className="mySwiper"
                            >
                                {
                                    data.map((item, index) => (
                                        <SwiperSlide>
                                            <div key={index + item} {...item}>
                                                <AboutCard pending={true} ArrowUpRight={item.ArrowUpRight} description={item.description} label={item.label} value={item.value} Icon={item.Icon} />
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutMe;
