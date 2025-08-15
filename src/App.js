// import { TextGenerateEffect } from "./Data";
// import { Tabs } from "./Data6";

// import { FloatingDockDemo } from "./Datamain";

// import { WavyBackground } from "./Data4";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ThemeToggle from "./ui/darkmode/ThemeToggle";
function App() {
  function Home() {
  return <h1 className="text-3xl font-bold">🏠 Home Page</h1>;
}
function About() {
  return <h1 className="text-3xl font-bold">ℹ️ About Page</h1>;
}
  return (
    <>
      {/* <TextGenerateEffect words={"himanshu is a good designer and reserture"}/> */}
       {/* <WavyBackground containerClassName={"max-w-[2200px]"}/> */}
      {/* <Tabs tabClassName={""} containerClassName={""} contentClassName={""}  activeTabClassName={""} tabs={[
    { title: "Tab 1", value: "tab1", content: <div>Content 1</div> },
    { title: "Tab 2", value: "tab2", content: <div>Content 2</div> }
  ]}/> */}
  {/* <FloatingDockDemo/> */}

  <Router>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <header className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <nav className="flex gap-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
          </nav>
          <ThemeToggle />
        </header>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>




    </>
  );
}

export default App;
