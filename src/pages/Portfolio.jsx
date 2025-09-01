import { useState } from "react";
import ButtonP from "../components/Portfoilo/ButtonP";
import { useTheme } from "../components/Themetoggel/ThemeProvider";
import ProjectsCard from "../components/Portfoilo/ProjectsCard";
import Skills from "../components/Portfoilo/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
function Portfolio() {
  const { theme } = useTheme();
  const [data, setdata] = useState(0);
  AOS.init({
        duration: 1200,
        once: false,
        offset: 200,
      }); 
const Language = [
  {
    img:"/svg/html.svg",
    Language:"HTML"
  },
  {
    img:"/svg/css.svg",
    Language:"CSS"
  },
  {
    img:"/svg/github.svg",
    Language:"Github"
  },
  {
    img:"/svg/json.svg",
    Language:"Json"
  },
  {
    img:"/svg/mysql.svg",
    Language:"MySql"
  },
   {
    img:"/svg/typescript.svg",
    Language:"TypeScript"
  },
  {
    img:"/svg/javascript.svg",
    Language:"JavaScript"
  },
  {
    img:"/svg/nodejs.svg",
    Language:"NodeJS"
  },
  {
    img:"/svg/reactjs.svg",
    Language:"ReactJs"
  },
  {
    img:"/svg/tailwind.svg",
    Language:"Tailwind CSS"
  },
  {
    img:"/svg/vercel.svg",
    Language:"Vercel"
  },
  {
    img:"/svg/vite.svg",
    Language:"Vite"
  },
]
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
                Explore my journey through projects, and
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
               
                  <ProjectsCard />
                </>
              </div>
            )
              :
              (
                <>
                <div className="container mb-16 mt-32  flex justify-center items-center  pb-[5%] ">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 gap-5">
                {Language.map((item, index) => (
                  <div
                    key={index}
                    className="h-[164px]"
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <Skills TechStackIcon={item.img} Language={item.Language}/>
                  </div>
                ))}
              </div>
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
