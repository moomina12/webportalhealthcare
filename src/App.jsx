import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-screen w-screen bg-black text-white">
      {/* Mobile Hamburger Menu */}
      <div className="md:hidden fixed top-4 left-4 z-20">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-gray-800 rounded-lg"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="flex h-full">
        {/* Sidebar */}
        <div
          className={`fixed md:static top-0 left-0 h-full w-64 transform 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 transition-transform duration-300 ease-in-out z-10`}
        >
          <Navbar onClose={() => setIsOpen(false)} />
        </div>

        {/* Main Pages */}
        <div className="flex-1 p-4 md:p-8 overflow-auto">
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
