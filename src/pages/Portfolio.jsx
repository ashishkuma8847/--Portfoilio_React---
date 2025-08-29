import { useState } from "react";
import ButtonP from "../components/Portfoilo/ButtonP";
import { useTheme } from "../components/Themetoggel/ThemeProvider";
import { ChevronDown, ExternalLink } from "lucide-react";

function Portfolio() {
  const { theme } = useTheme();
  const [data, setdata] = useState(0);
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
      <section className={`${theme ? "text-black" : "text-white"} font-poppins`}>
        <div className="container flex justify-between  ">
          {/* LEFT SIDE STICKY SECTION */}
          <div className="flex flex-col gap-[30px] w-[400px] sticky top-28 self-start">
            <div>
              <h1 className="font-semibold text-[34px] leading-[65px]">
                Portfolio
                <span className="text-customTeal"> Showcase</span>
              </h1>
              <p className="font-medium text-[14px]">
                Explore my journey through projects, certifications, and
                technical expertise. Each section represents a milestone in my
                continuous learning path.
              </p>
            </div>
            <ButtonP data={data} setdata={setdata} />
          </div>

          {/* RIGHT SIDE PROJECTS GRID */}
          <div className="">

          {data === 0 ? (
            <div className="grid grid-cols-2 gap-[30px]  mb-16 mt-32 flex-1 z-0">
              <>
                {(Click ?  projects :projects.slice(0,4)).map((item, index) => (
                  <div className="max-w-[396px] w-full" key={item.title + index}>
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
                <button onClick={()=>setClick(!Click)} className="bg-gradient-to-t flex justify-between items-center font-poppins  text-sm font-medium p-[10px] w-[100px] bg-white/10 backdrop-blur-lg rounded-lg shadow-lg mb-[25px]">See More <ChevronDown className={`${Click ? "rotate-180" :"rotate-0"} w-[15px] transition-all duration-200 text-customTeal h-[15px]`}/>  </button>
              </>
            </div>
              ) 
              : 
              (
              <>
              <div className="mb-16 mt-32 ">
                sas
              </div>
              </>
            )
          }
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
