import { useEffect } from "react";
import { useTheme } from "../components/Themetoggel/ThemeProvider";
import Fontui from "../components/ui/Fontui";
import Button from "../components/ui/Button";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const { theme } = useTheme();

  // Initialize AOS only once
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      offset: 200,
    });
  }, []);

  return (
    <section className={`${theme ? "text-black" : "text-white"}`}>
      <div className="container flex lg:flex-row flex-col pt-[100px] pb-[30px] lg:py-0 min-h-screen gap-6 md:justify-between items-center font-poppins">
        
        {/* LEFT CONTENT */}
        <div
          data-aos="fade-right"
          className="flex lg:pl-[40px] p-[0px] flex-col justify-center gap-[15px] lg:gap-[30px] text-center lg:text-left"
        >
          {/* Title with Lottie */}
          <div className="flex text-customTeal relative lg:font-medium font-normal text-sm lg:text-lg h-[30px] justify-start">
            <iframe
              title="data"
              className="w-[94px] -z-10 absolute left-[-52px] top-[-50px] h-[94px]"
              src="https://lottie.host/embed/49ef9e95-4631-42fe-a4d5-ed8bf3addcfc/YLuZni78Ue.lottie"
            ></iframe>
            <h1>Ready to Innovate</h1>
          </div>

          {/* Main Heading */}
          <h1 className="font-semibold text-[34px] lg:text-[64px] max-w-[400px] w-full leading-10 lg:leading-[65px] mx-auto lg:mx-0">
            Full-Stack <span className="text-customTeal">Developer</span>
          </h1>

          {/* Typing Effect */}
          <div className="sm:w-full w-[280px] truncate mx-auto lg:mx-0">
            <Fontui
              words={["Network & Telecom Student", "Tech Enthusiast"]}
              className="text-lg md:text-2xl"
              outofspan=""
            />
          </div>

          {/* Tech Stack Buttons */}
          <div className="grid grid-cols-2 sm:flex gap-[15px] w-full max-w-[300px] sm:max-w-none mx-auto lg:mx-0">
            <Button title={"React"} />
            <Button title={"Javascript"} />
            <Button title={"Node.js"} />
            <Button title={"Tailwind"} />
          </div>

          {/* Social Buttons */}
          <div className="flex gap-[15px] justify-center lg:justify-start">
            <button
              className={`${
                theme
                  ? "bg-white/50 border-black/10 group-hover:border-black/20"
                  : "bg-black/50 border-white/10 group-hover:border-white/20"
              } relative rounded-xl backdrop-blur-xl p-2 flex items-center justify-center border transition-all duration-300`}
            >
              <IconBrandGithub />
            </button>
            <button
              className={`${
                theme
                  ? "bg-white/50 border-black/10 group-hover:border-black/20"
                  : "bg-black/50 border-white/10 group-hover:border-white/20"
              } relative rounded-xl backdrop-blur-xl p-2 flex items-center justify-center border transition-all duration-300`}
            >
              <IconBrandInstagram />
            </button>
            <button
              className={`${
                theme
                  ? "bg-white/50 border-black/10 group-hover:border-black/20"
                  : "bg-black/50 border-white/10 group-hover:border-white/20"
              } relative rounded-xl backdrop-blur-xl p-2 flex items-center justify-center border transition-all duration-300`}
            >
              <IconBrandLinkedin />
            </button>
          </div>
        </div>

        {/* RIGHT LOTTIE ANIMATION */}
        <iframe
          title="data"
          className="w-full max-w-[570px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[570px] -z-10"
          src="https://lottie.host/embed/cd9e673b-9d2b-4e29-b2b9-76b4394fa637/uTmQ3jVyUJ.lottie"
        ></iframe>
      </div>
    </section>
  );
};

export default Home;
