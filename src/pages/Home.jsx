import { useTheme } from "../components/common/Themetoggel/ThemeProvider";
import Fontui from "../components/ui/Fontui";
import Button from "../components/ui/Button";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';
const Home = () => {
    const { theme } = useTheme();


    // ✅ Lottie options (no scaling inside)

    return (
        <section className={`${theme ? "text-black" : "text-white"}`}>
            <div className="container flex justify-between items-center font-poppins">
                <div className="flex flex-col justify-center gap-[30px]">

                    <h1 className="font-semibold text-[64px] w-[400px] leading-[65px]">Full-Stack<span className="text-customTeal"> Developer</span> </h1>
                    <Fontui words={["Network & Telecom Student", "Tech Enthusiast"]} outofspan="" />
                    <div className="flex gap-[15px]">

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
              
                {/* <iframe title="data " className="w-[500px] h-[500px]" src="https://lottie.host/embed/a4894a9d-e2bd-474a-a412-b93d259a812d/GcH448f9RE.lottie"></iframe> */}
                {/* <iframe title="data " className="w-[500px] -z-10 h-[500px]" src="https://lottie.host/embed/560cffd6-0949-4088-b747-5b53c8a721a2/324XhjoFNE.lottie"></iframe> */}
                <iframe title="data " className="w-[500px] -z-10 h-[500px]" src="https://lottie.host/embed/cd9e673b-9d2b-4e29-b2b9-76b4394fa637/uTmQ3jVyUJ.lottie"></iframe>
            </div>
        </section>


    );
};
export default Home