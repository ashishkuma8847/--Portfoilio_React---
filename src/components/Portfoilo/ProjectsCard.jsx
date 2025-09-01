import { ChevronDown, ExternalLink } from "lucide-react";
import { useState } from "react";

const ProjectsCard = () => {
    const [Click, setClick] = useState(0);

    const projects = [
        {
            title: "CoinDesk",
            img: "coindesk.png",
            href: "https://ashishkuma8847.github.io/coin/",
        },
        {
            title: "Clock",
            img: "clock.png",
            href: "https://ashishkuma8847.github.io/clock/",
        },
        {
            title: "Shoue E-Comm",
            img: "e-comm-react.png",
            href: "https://github.com/ashishkuma8847/e-comm-react",
        },
        {
            title: "Iphone E-comm",
            img: "iphoneEcomm.png",
            href: "https://cool-cassata-a68535.netlify.app/",
        },
        {
            title: "Login Page",
            img: "loginpage.png",
            href: "https://ashishkuma8847.github.io/loginpage/",
        },
        {
            title: "Shrishyam Stone",
            img: "shrishyam.png",
            href: "https://ss-frontend.vercel.app/",
        },
        {
            title: "Start Project",
            img: "startproject.png",
            href: "https://ashishkuma8847.github.io/start_project/",
        },
        {
            title: "Verlin Project",
            img: "verlin.png",
            href: "https://ashishkuma8847.github.io/commertial/",
        },
    ];
    return (
        <>
            {(Click ? projects : projects.slice(0, 4)).map((item, index) => (
                <div className="max-w-[396px] w-full"
                key={index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                >
                    <div className="flex flex-col gap-[20px] group transition-all duration-200 rounded-2xl  bg-gradient-to-t to-slate-400/50 from-[#999999]/10 shadow-lg px-4 py-4">
                        {/* Project Image */}
                        <img
                            className="rounded-2xl transition-transform  z-0 duration-300 group-hover:scale-105"
                            src={`/images/${item.img}`}
                            alt={item.title}
                        />

                        {/* Project Title + Link */}
                        <div className="flex flex-col gap-[5px]">
                            <h1 className="font-semibold text-base">{item.title}</h1>
                            <a
                                className="flex gap-[5px] h-5 text-customTeal transition-all duration-200 text-sm font-medium items-center"
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Demo{" "}
                                <span className="w-[20px] h-[20px] flex justify-center items-center">
                                    <ExternalLink className="w-[15px] h-[15px] transition-all duration-200 group-hover:rotate-[30deg]" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
            <button onClick={() => setClick(!Click)} className="bg-gradient-to-t flex justify-between items-center font-poppins  text-sm font-medium p-[10px] w-[100px] bg-white/10 backdrop-blur-lg rounded-lg shadow-lg mb-[25px]">See More <ChevronDown className={`${Click ? "rotate-180" : "rotate-0"} w-[15px] transition-all duration-200 text-customTeal h-[15px]`} />  </button>
        </>
    )
}

export default ProjectsCard