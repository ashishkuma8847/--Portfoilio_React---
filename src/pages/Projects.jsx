import { useTheme } from "../components/common/Themetoggel/ThemeProvider";

function Projects() {
          const { theme } = useTheme();
    
    return(
        <>
          <section className={`${theme ? "text-black" : "text-white"}`}>

        <h1>Projects</h1>
          </section>
        </>
    )
}
export default Projects