import { useTheme } from "../components/common/Themetoggel/ThemeProvider";

function Portfolio() {
          const { theme } = useTheme();
    
    return(
        <>
          <section className={`${theme ? "text-black" : "text-white"}`}>

        <div className="container">
          <div className="flex flex-col font-poppins">
      <div className="w-[400px]">
                    <h1  className="font-semibold text-[34px]  leading-[65px]">Portfolio<span className="text-customTeal">  Showcase</span> </h1>
                    <p className="font-medium text-[14px]  ">Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.</p>

      </div>
     
      <div className=""></div>
          </div>

        </div>
          </section>
        </>
    )
}
export default Portfolio