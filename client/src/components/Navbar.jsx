import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const location = useLocation();
    const isContactPage = location.pathname === "/contact";
    const isLightPage = location.pathname === "/contact" || location.pathname === "/projects"

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-white dark:bg-gray-900 shadow text-gray-900 dark:text-white"
                : "bg-transparent text-white"
                } ${isLightPage ? "text-black" : ""}`}
        >
            <div className="w-full px-6 md:px-12 py-6 flex items-center justify-between">

                {/* Left: Logo + Nav */}
                <div className="flex items-center space-x-10">
                    <Link to="/" className={`text-2xl md:text-3xl font-serif font-semibold whitespace-nowrap ${scrolled ? "text-gray-900 dark:text-white" : (isLightPage ? "text-black" : "text-white")}`}>
                        CCSS
                    </Link>

                    <nav className="hidden md:flex space-x-8 text-base font-medium" aria-label="Main navigation">
                        <Link
                            to="/about"
                            className={`hover:text-[#e79c8b] transition-colors ${scrolled ? "text-gray-900 dark:text-white" : (isLightPage ? "text-black" : "text-white")}`}
                        >
                            About
                        </Link>
                        <Link
                            to="/services"
                            className={`hover:text-[#e79c8b] transition-colors ${scrolled ? "text-gray-900 dark:text-white" : (isLightPage ? "text-black" : "text-white")}`}
                        >
                            Services
                        </Link>
                        <Link
                            to="/projects"
                            className={`hover:text-[#e79c8b] transition-colors ${scrolled ? "text-gray-900 dark:text-white" : (isLightPage ? "text-black" : "text-white")}`}
                        >
                            Our Projects
                        </Link>
                        <Link
                            to="/contact"
                            className={`hover:text-[#e79c8b] transition-colors ${scrolled ? "text-gray-900 dark:text-white" : (isLightPage ? "text-black" : "text-white")}`}
                        >
                            Contact
                        </Link>
                    </nav>
                </div>

                {/* Right: CTA Button */}
                {!isContactPage && (
                    <div className="hidden md:block">
                        <Link
                            to="/contact"
                            className="bg-[#e79c8b] hover:bg-[#d98978] text-white font-semibold px-8 py-3 rounded-md transition"
                        >
                            Get Started
                        </Link>
                    </div>
                )}

                {/* Mobile Menu Toggle */}
                <button
                    className={`md:hidden ml-auto ${scrolled ? "text-gray-900 dark:text-white" : (isLightPage ? "text-black" : "text-white")}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-nav"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                    <nav className="flex flex-col items-center space-y-4 py-4" aria-label="Mobile menu" id="mobile-nav">
                        <Link to="/about" className="text-gray-900 dark:text-white hover:text-[#e79c8b] transition-colors">About</Link>
                        <Link to="/services" className="text-gray-900 dark:text-white hover:text-[#e79c8b] transition-colors">Services</Link>
                        <Link to="/projects" className="text-gray-900 dark:text-white hover:text-[#e79c8b] transition-colors">Our Projects</Link>
                        <Link to="/contact" className="text-gray-900 dark:text-white hover:text-[#e79c8b] transition-colors">Contact</Link>
                        <Link to="/contact" className="bg-[#e79c8b] hover:bg-[#d98978] text-white font-semibold px-6 py-3 rounded-md transition">Get Started</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Navbar;
