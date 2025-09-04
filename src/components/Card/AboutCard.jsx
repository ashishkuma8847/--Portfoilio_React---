import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../Themetoggel/ThemeProvider";

const AboutCard = ({ Icon, value, label, description, ArrowUpRight, pending }) => {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false); // 👈 card viewport me aya ya nahi
  const cardRef = useRef(null);

  // AOS init
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 0,
    });
  }, []);

  // Intersection observer for scroll detection
  useEffect(() => {
  const currentRef = cardRef.current; 

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    },
    { threshold: 0.3 }
  );

  if (currentRef) {
    observer.observe(currentRef);
  }

  return () => {
    if (currentRef) {
      observer.unobserve(currentRef);
    }
  };
}, []);


  return (
    <div
      ref={cardRef}
      data-aos="fade-up"
      data-aos-duration="1300"
      className=" font-poppins max-w-[427px] w-full     group"
    >
      {/* Agar pending true hai & abhi visible nahi hai → skeleton */}
      {pending && !visible ? (
        <div className="relative z-10 bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 border border-white/10 h-full flex flex-col  animate-pulse">
          <div className="flex items-center justify-between mb-4">
            <div className="w-16 h-16 rounded-full bg-gray-700"></div>
            <div className="w-12 h-8 bg-gray-700 rounded"></div>
          </div>
          <div>
            <div className="h-4 w-32 bg-gray-700 rounded mb-2"></div>
            <div className="h-3 w-48 bg-gray-700 rounded"></div>
          </div>
        </div>
      ) : (
        // 👉 Actual card (jab visible ho jaye ya pending false ho)
        <div
          className={`relative z-10 ${
            theme ? "bg-gray-900" : "bg-gray-900/50"
          } backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between `}
        >
          <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#6366f1] to-[#12BBB6] opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>

          <div className="flex items-center justify-between mb-4">
            <div className="md:w-16 w-14 h-14 md:h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
              <Icon className="md:w-8 w-5 h-5 md:h-8 text-white" />
            </div>
            <span
              className=" text-2xl md:text-4xl font-bold text-white"
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
                className="text-xs font-medium text-gray-400"
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
      )}
    </div>
  );
};

export default AboutCard;
