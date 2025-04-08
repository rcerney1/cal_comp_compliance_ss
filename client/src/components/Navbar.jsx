import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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
                }`}
        >
            <div className="w-full px-6 md:px-12 py-6 flex items-center justify-between">

                {/* Left: Logo + Nav */}
                <div className="flex items-center space-x-10">
                    <h1 className="text-2xl md:text-3xl font-serif font-semibold whitespace-nowrap">
                        California Comp Security
                    </h1>

                    <nav className="hidden md:flex space-x-8 text-base font-medium">
                        {["About", "Services", "Contact"].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className={`hover:text-[#e79c8b] transition-colors ${scrolled ? "text-gray-900 dark:text-white" : "text-white"
                                    }`}
                            >
                                {link}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Right: CTA Button */}
                <div className="hidden md:block">
                    <a
                        href="#"
                        className="bg-[#e79c8b] hover:bg-[#d98978] text-white font-semibold px-8 py-3 rounded-md transition"
                    >
                        Get Started
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden ml-auto"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        {["About", "Services", "Contact"].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-gray-900 dark:text-white hover:text-[#e79c8b] transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                        <a
                            href="#"
                            className="bg-[#e79c8b] hover:bg-[#d98978] text-white font-semibold px-6 py-3 rounded-md transition"
                        >
                            Get Started
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Navbar;
