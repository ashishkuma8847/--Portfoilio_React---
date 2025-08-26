import "./App.css";
import { MouseTrail } from "./components/common/cursorui/Cursor";
import { FloatingDockDemo } from "./components/common/pagestheme/PagesDPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contect from "./pages/Contect";
import Header from "./components/common/Header";
import { AnimatePresence } from "framer-motion";
import WelcomeScreen from "./components/ui/Wellcomepage";
import { useState } from "react";
import Portfolio from "./pages/Portfolio";
import AnimatedBackground from "./pages/AnimatedBackground";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      <BrowserRouter>
          <MouseTrail />
        <AnimatePresence mode="wait">
          {showWelcome && (
            <WelcomeScreen
              onLoadingComplete={() => setShowWelcome(false)}
            />
          )}
        </AnimatePresence>

        {!showWelcome && (
          <>
          <AnimatedBackground/>
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contect" element={<Contect />} />
            </Routes>

            <FloatingDockDemo />
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
