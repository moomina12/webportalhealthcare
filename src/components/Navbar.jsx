import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar({ onClose }) {
  return (
    <nav className="h-full w-64 bg-red-600 bg-opacity-95 text-white font-bold px-6 py-8 flex flex-col items-center">
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="w-20 h-20 mb-8 object-contain"
      />

      {/* Menu Links */}
      <div className="flex flex-col space-y-6 w-full">
        <Link
          to="/"
          onClick={onClose}
          className="hover:underline text-center"
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={onClose}
          className="hover:underline text-center"
        >
          About
        </Link>
        <Link
          to="/services"
          onClick={onClose}
          className="hover:underline text-center"
        >
          Services
        </Link>
        <Link
          to="/contact"
          onClick={onClose}
          className="hover:underline text-center"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}




