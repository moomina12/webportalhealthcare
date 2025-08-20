import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Sidebar + Content */}
      <div className="relative z-10 flex h-full">
        {/* Sidebar */}
        <Navbar />

        {/* Main Pages */}
        <div className="flex-1 p-8 overflow-auto flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
