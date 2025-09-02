import { useTheme } from "../components/Themetoggel/ThemeProvider";
import Fontui from "../components/ui/Fontui";
import Button from "../components/ui/Button";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
    const { theme } = useTheme();
      AOS.init({
        duration: 1200,
        once: false,
        offset: 200,
      });
 


    return (
        <section className={`${theme ? "text-black" : "text-white"}`}>
            <div className="container flex lg:flex-row flex-col pt-[100px] pb-[30px] lg:py-0  h-screen  justify-between my-auto  items-center font-poppins">
                <div data-aos="fade-right" className="flex lg:pl-[40px] p-[0px] flex-col justify-center gap-[10px] lg:gap-[30px]">
                    <div     className="flex   text-customTeal relative lg:font-medium font-normal text-sm lg:text-lg h-[30px]">
                        <iframe title="data" className="w-[94px] -z-10 absolute left-[-52px] top-[-50px] h-[94px]" src="https://lottie.host/embed/49ef9e95-4631-42fe-a4d5-ed8bf3addcfc/YLuZni78Ue.lottie"></iframe>
                       <h1 className="  ">Ready to Innovate</h1>
                    </div>
                    <h1  className="font-semibold text-[34px] lg:text-[64px] max-w-[400px] w-full leading-10 lg:leading-[65px]">Full-Stack<span className="text-customTeal"> Developer</span> </h1>
                    <div className="sm:w-full w-[280px] truncate ">
                    <Fontui words={["Network & Telecom Student", "Tech Enthusiast"]} className="text-lg md:text-2xl" outofspan="" />
                    </div>
                    <div className="grid grid-cols-2  sm:flex gap-[15px]">
                        <Button title={"React"} />
                        <Button title={"Javascript"} />
                        <Button title={"Node.js"} />
                        <Button title={"Tailwind"} />
                    </div>
                    <div className="flex gap-[15px]">
                        <button className={`${theme ? "bg-white/50 border-black/10 group-hover:border-black/20" : "bg-black/50 border-white/10 group-hover:border-white/20"} relative rounded-xl  backdrop-blur-xl p-2 flex items-center justify-center border  transition-all  duration-300`}><IconBrandGithub /> </button>
                        <button className={`${theme ? "bg-white/50 border-black/10 group-hover:border-black/20" : "bg-black/50 border-white/10 group-hover:border-white/20"} relative rounded-xl  backdrop-blur-xl p-2 flex items-center justify-center border  transition-all  duration-300`}><IconBrandInstagram /> </button>
                        <button className={`${theme ? "bg-white/50 border-black/10 group-hover:border-black/20" : "bg-black/50 border-white/10 group-hover:border-white/20"} relative rounded-xl  backdrop-blur-xl p-2 flex items-center justify-center border  transition-all  duration-300`}><IconBrandLinkedin /> </button>
                    </div>

                </div>
              
                {/* <iframe title="data " className="w-[550px] h-[550px]" src="https://lottie.host/embed/a4894a9d-e2bd-474a-a412-b93d259a812d/GcH448f9RE.lottie"></iframe> */}
                {/* <iframe title="data " className="w-[550px] -z-10 h-[550px]" src="https://lottie.host/embed/560cffd6-0949-4088-b747-5b53c8a721a2/324XhjoFNE.lottie"></iframe> */}
                <iframe  title="data " className="max-w-[570px] w-full -z-10 h-[570px] " src="https://lottie.host/embed/cd9e673b-9d2b-4e29-b2b9-76b4394fa637/uTmQ3jVyUJ.lottie"></iframe>
      
            </div>
            
        </section>


    );
};
export default Home