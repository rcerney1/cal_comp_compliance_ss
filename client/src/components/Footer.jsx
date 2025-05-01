import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Links */}
        <div className="mb-6">
          <Link to="/services" className="text-gray-400 hover:text-white px-4">Services</Link>
          <Link to="/contact" className="text-gray-400 hover:text-white px-4">Contact</Link>
          <Link to="/about" className="text-gray-400 hover:text-white px-4">About</Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} California Compliance Security Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
