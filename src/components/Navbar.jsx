import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 h-full w-48 z-50 bg-red-600 bg-opacity-90 text-white font-bold px-6 py-8 flex flex-col items-center">
      
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-20 h-20 mb-8 object-contain" />

      {/* Menu Links */}
      <div className="flex flex-col space-y-6 w-full">
        <Link to="/" className="hover:underline text-center">Home</Link>
        <Link to="/about" className="hover:underline text-center">About</Link>
        <Link to="/services" className="hover:underline text-center">Services</Link>
        <Link to="/contact" className="hover:underline text-center">Contact</Link>
      </div>
    </nav>
  );
}



