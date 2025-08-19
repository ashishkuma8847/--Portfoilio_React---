import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
const AboutCard = ({Icon,value,label,description,ArrowUpRight}) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 0,
        });
    }, []);
  return (
    <>
    <div data-aos={"fade-up"} data-aos-duration={1300} className="relative font-poppins w-[427px]  group">
                            <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
                                <div className={`absolute -z-10 inset-0 bg-gradient-to-br from-[#6366f1] to-[#12BBB6] opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>

                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <span
                                        className="text-4xl font-bold text-white"
                                        data-aos="fade-up-left"
                                        data-aos-duration="1500"
                                        data-aos-anchor-placement="top-bottom"
                                    >
                                        {value}
                                    </span>
                                </div>

                                <div>
                                    <p
                                        className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-2"
                                        data-aos="fade-up"
                                        data-aos-duration="800"
                                        data-aos-anchor-placement="top-bottom"
                                    >
                                        {label}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <p
                                            className="text-xs font-medium  text-gray-400"
                                            data-aos="fade-up"
                                            data-aos-duration="1000"
                                            data-aos-anchor-placement="top-bottom"
                                        >
                                            {description}
                                        </p>
                                        <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                            </div>
                        </div>
    </>
  )
}

export default AboutCard