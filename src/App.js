import "./App.css";
import { MouseTrail } from "./components/cursorui/Cursor";
import { FloatingDockDemo } from "./components/pagestheme/PagesDPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contect from "./pages/Contect";
import Header from "./components/common/Header";
import { AnimatePresence } from "framer-motion";
import WelcomeScreen from "./components/ui/Wellcomepage";
import { useState } from "react";
import Portfolio from "./pages/Portfolio";
import Animated from "./pages/Animated";
import { FloatingDockDemo2 } from "./components/pagestheme/PagesDPage2";
// import AnimatedBackground from "./components/ui/AnimatedBackground";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      <BrowserRouter>
      <div className="lg:block hidden"><MouseTrail /></div>
          
        <AnimatePresence mode="wait">
          {showWelcome && (
            <WelcomeScreen
              onLoadingComplete={() => setShowWelcome(false)}
            />
          )}
        </AnimatePresence>

        {!showWelcome && (
          <>
          <Animated/>
          {/* <AnimatedBackground/>  */}
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contect" element={<Contect />} />
            </Routes>
              
           <div className="lg:block hidden" ><FloatingDockDemo /></div> 
           <div className="lg:hidden block"><FloatingDockDemo2 /></div> 
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
