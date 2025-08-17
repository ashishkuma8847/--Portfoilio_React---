import Theme from "./Themetoggel/Themebutton"
import { useTheme } from "./Themetoggel/ThemeProvider"
function Header() {
    const {theme}=useTheme()
    return (
        <>
        <div className="flex justify-between">
            <h1>Header</h1>
            <Theme/>
        </div>

        </>
    )
}
export default Header