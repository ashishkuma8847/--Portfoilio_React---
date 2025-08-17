import { useTheme } from "../components/common/Themetoggel/ThemeProvider";

function AboutMe() {
    const { theme } = useTheme();

    return (
        <>
            <section className={`${theme ? "text-black" : "text-white"}`}>
                <h1>About Me</h1>
            </section>
        </>
    )
}
export default AboutMe