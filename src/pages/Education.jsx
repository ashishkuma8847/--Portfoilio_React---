import { useTheme } from "../ui/Themetoggel/ThemeProvider";

function Education() {
    const { theme } = useTheme();

    return (
        <>
            <section className={`${theme ? "text-black" : "text-white"}`}>

                <h1>education</h1>
            </section>
        </>
    )
}
export default Education