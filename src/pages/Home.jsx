import { useTheme } from "../ui/Themetoggel/ThemeProvider";

function Home() {
      const { theme } = useTheme();
    
    return (
        <>
        <section className={`${theme ? "text-black" : "text-white"}`}>

            <h1 className="">home</h1>
        </section>
        </>
    )
}
export default Home