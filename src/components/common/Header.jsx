import Fontui from "../ui/Fontui"
import Theme from "./Themetoggel/Themebutton"
function Header() {
    return (
        <>
        <div className="container font-inter py-[24px]  flex justify-between relative -z-0">
            <Fontui  words={["dev","des"]} inspan="h." outofspan="Ashis"/>
            <Theme/>
        </div>

        </>
    )
}
export default Header