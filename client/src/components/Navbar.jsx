import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const location = useLocation();
    const isContactPage = location.pathname === "/contact";
    const isLightPage = location.pathname === "/contact" || location.pathname === "/projects";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent background scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

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
                    <Link
                        to="/"
                        className={`text-2xl md:text-3xl font-serif font-semibold whitespace-nowrap ${scrolled
                            ? "text-gray-900 dark:text-white"
                            : isLightPage
                                ? "text-black"
                                : "text-white"
                            }`}
                    >
                        CCSS
                    </Link>

                    <nav className="hidden md:flex gap-10 text-base font-medium items-center" aria-label="Main navigation">

                        <Link
                            to="/about"
                            className={`py-3 hover:text-[#d07461] transition-colors ${scrolled
                                ? "text-gray-900 dark:text-white"
                                : isLightPage
                                    ? "text-black"
                                    : "text-white"
                                }`}
                        >
                            About
                        </Link>
                        <Link
                            to="/services"
                            className={`py-3 hover:text-[#d07461] transition-colors ${scrolled
                                ? "text-gray-900 dark:text-white"
                                : isLightPage
                                    ? "text-black"
                                    : "text-white"
                                }`}
                        >
                            Services
                        </Link>
                        <Link
                            to="/projects"
                            className={`py-3 hover:text-[#d07461] transition-colors ${scrolled
                                ? "text-gray-900 dark:text-white"
                                : isLightPage
                                    ? "text-black"
                                    : "text-white"
                                }`}
                        >
                            Our Projects
                        </Link>
                        <Link
                            to="/contact"
                            className={`py-3 hover:text-[#d07461] transition-colors ${scrolled
                                ? "text-gray-900 dark:text-white"
                                : isLightPage
                                    ? "text-black"
                                    : "text-white"
                                }`}
                        >
                            Contact
                        </Link>
                    </nav>
                </div>

                {/* Right: CTA Button */}
                {!isContactPage && (
                    <div className="hidden md:block">
                        <Link to="/contact">
                            <a
                                href="#"
                                className="bg-[#e79c8b] hover:bg-[#d98978] text-[#2e2e2e] font-bold px-8 py-3 rounded-md transition"
                            >
                                Get Started
                            </a>
                        </Link>
                    </div>
                )}

                {/* Mobile Menu Toggler */}
                <button
                    className={`md:hidden ml-auto ${scrolled
                        ? "text-gray-900 dark:text-white"
                        : isLightPage
                            ? "text-black"
                            : "text-white"
                        }`}
                    onClick={() => setMenuOpen(true)}
                    aria-label="Open menu"
                    aria-controls="mobile-nav"
                    aria-expanded={menuOpen}
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Full-Screen Mobile Nav */}
            {menuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-white dark:bg-gray-900 flex flex-col items-center justify-center space-y-8 px-6"
                    id="mobile-nav"
                    aria-label="Mobile menu"
                >
                    <button
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                        className="absolute top-6 right-6 text-gray-900 dark:text-white"
                    >
                        <X size={28} />
                    </button>

                    <Link
                        to="/about"
                        onClick={() => setMenuOpen(false)}
                        className="text-2xl text-gray-900 dark:text-white hover:text-[#d07461] transition py-4"
                    >
                        About
                    </Link>
                    <Link
                        to="/services"
                        onClick={() => setMenuOpen(false)}
                        className="text-2xl text-gray-900 dark:text-white hover:text-[#d07461] transition py-4"
                    >
                        Services
                    </Link>
                    <Link
                        to="/projects"
                        onClick={() => setMenuOpen(false)}
                        className="text-2xl text-gray-900 dark:text-white hover:text-[#d07461] transition py-4"
                    >
                        Our Projects
                    </Link>
                    <Link
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="text-2xl text-gray-900 dark:text-white hover:text-[#d07461] transition py-4"
                    >
                        Contact
                    </Link>
                    <Link
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="bg-[#e79c8b] hover:bg-[#d98978] text-[#2e2e2e] font-bold px-8 py-3 rounded-md transition"
                    >
                        Get Started
                    </Link>
                </div>
            )}
        </header>
    );
}

export default Navbar;
