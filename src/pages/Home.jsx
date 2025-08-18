    import { useTheme } from "../components/common/Themetoggel/ThemeProvider";
import Sideanimation from "../Home/Sideanimation";
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
                    <Fontui words={["Network & Telecom Student","Tech Enthusiast"]} outofspan=""/>
                    <div className="flex gap-[15px]">
                        
                    <Button title={"React"}/>
                    <Button title={"Javascript"}/>
                    <Button title={"Node.js"}/>
                    <Button title={"Tailwind"}/>
                    </div>
                    <div className="flex gap-[15px]">
                        <button className={`${theme ? "bg-white/50 border-black/10 group-hover:border-black/20" :"bg-black/50 border-white/10 group-hover:border-white/20"} relative rounded-xl  backdrop-blur-xl p-2 flex items-center justify-center border  transition-all  duration-300`}><IconBrandGithub /> </button>
                        <button className={`${theme ? "bg-white/50 border-black/10 group-hover:border-black/20" :"bg-black/50 border-white/10 group-hover:border-white/20"} relative rounded-xl  backdrop-blur-xl p-2 flex items-center justify-center border  transition-all  duration-300`}><IconBrandInstagram  /> </button>
                        <button className={`${theme ? "bg-white/50 border-black/10 group-hover:border-black/20" :"bg-black/50 border-white/10 group-hover:border-white/20"} relative rounded-xl  backdrop-blur-xl p-2 flex items-center justify-center border  transition-all  duration-300`}><IconBrandLinkedin   /> </button>
                    </div>

                </div>
                <Sideanimation />
            </div>
        </section>


    );
};
export default Home