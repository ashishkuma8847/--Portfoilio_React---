import { useTheme } from "../components/common/Themetoggel/ThemeProvider";

function Contect() {
    const { theme } = useTheme();

    return (
        <>
            <section className={`${theme ? "text-black" : "text-white"}`}>

                <h1>Contect</h1>
            </section>
        </>
    )
}
export default Contect