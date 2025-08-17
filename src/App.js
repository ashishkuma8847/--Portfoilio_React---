import Theme from "./components/common/Themetoggel/Themebutton";
 import "./App.css"
import { MouseTrail } from "./components/common/cursorui/Cursor";
import { FloatingDockDemo } from "./components/common/pagestheme/PagesDPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contect from "./pages/Contect";
import Education from "./pages/Education";
function App() {

  return (
    <>
      {/* <TextGenerateEffect words={"himanshu is a good designer and reserture"}/> */}
    
 
<BrowserRouter>

<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/aboutme" element={<AboutMe/>}/>
<Route path="/projects" element={<Projects/>}/>
<Route path="/contect" element={<Contect/>}/>
<Route path="/education" element={<Education/>}/>
</Routes>
<MouseTrail/>
<FloatingDockDemo/>
<Theme/>
</BrowserRouter>

    </>
  );
}

export default App;
