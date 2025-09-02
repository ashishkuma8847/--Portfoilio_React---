import Theme from "../Themetoggel/Themebutton"
import Fontui from "../ui/Fontui"
function Header() {
    return (
        <>
        <div className="container font-inter py-[24px] flex  items-center justify-between 
                fixed top-0 left-1/2 -translate-x-1/2  z-10">
  <Fontui words={["dev","des"]} className="text-2xl md:text-3xl"  inspan="h." outofspan="Ashis" />
  <Theme />
</div>


        </>
    )
}
export default Header