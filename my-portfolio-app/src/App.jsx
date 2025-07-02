import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Playground from "./pages/Playground";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar";
import { TabProvider, useTab } from "./utils/TabContext";
function App() {
  return (
    <>
      <BrowserRouter>
        <TabProvider>
          <div className="overflow-y-hidden overflow-x-hidden flex flex-col md:flex-row bg-white font-ibm text-black scroll-snap">
            <Navbar />
            <div className="pt-6 md:pl-[15%] md:pt-0 w-full ">
              <Routes>
                <Route path="*" element={<Home />} />
                {/* <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/playground" element={<Playground />} />
              <Route path="/projects" element={<Projects />} /> */}
                <Route path="/projects/:id" element={<ProjectDetail />} />
                {/* <Route path="/resume" element={<Resume />} /> */}
              </Routes>
            </div>
          </div>
        </TabProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
