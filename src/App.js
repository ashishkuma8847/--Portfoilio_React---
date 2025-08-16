import Theme from "./ui/Themetoggel/Themebutton";
 import "./App.css"
import { MouseTrail } from "./ui/cursorui/Cursor";
import { FloatingDockDemo } from "./ui/pagestheme/PagesDPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {

  return (
    <>
      {/* <TextGenerateEffect words={"himanshu is a good designer and reserture"}/> */}
    
 
<BrowserRouter>
<MouseTrail/>
<FloatingDockDemo/>
<Theme/>
<Routes>
<Route/>
</Routes>
</BrowserRouter>

    </>
  );
}

export default App;
