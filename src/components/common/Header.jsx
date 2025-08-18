import Fontui from "../ui/Fontui"
import Theme from "./Themetoggel/Themebutton"
import { useTheme } from "./Themetoggel/ThemeProvider"
function Header() {
    const {theme}=useTheme()
    return (
        <>
        <div className="container font-inter py-[24px]  flex justify-between">
            <Fontui  words={["dev","des"]} inspan="h." outofspan="Ashis"/>
            <Theme/>
        </div>

        </>
    )
}
export default Header