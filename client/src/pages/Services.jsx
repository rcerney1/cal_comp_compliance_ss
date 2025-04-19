import Navbar from "../components/Navbar";
import { FaPlug, FaWrench, FaLock, FaCamera, FaNetworkWired, FaBell } from "react-icons/fa"; // Icons for services
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

function Services() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location]);

    return (
        <div className="text-gray-900 bg-white font-sans">
            <Navbar />

            {/* Hero Section */}
           <section className="relative w-full h-screen">
                <img
                    src="#" // Update this with the actual image URL for the About page
                    alt="Security Service"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-start justify-end px-6 md:px-16 text-left pb-24 md:pb-40" data-aos="fade-up">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 max-w-5xl">
                        Our Security Solution 
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-5xl" data-aos="fade-up" data-aos-delay="100">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet scelerisque lectus, id tincidunt purus.
                    </p>
                    <p>picture will be added</p>
                </div>
            </section>


            {/* Services Overview Section */}
            <section className="bg-gray-50 text-gray-900 py-24 px-6 md:px-16" data-aos="fade-up">
                <h2 className="text-3xl md:text-5xl font-semibold text-center mb-12">
                    Overview of Our Services
                </h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, lectus sit amet ultrices
                    scelerisque, sapien erat feugiat libero, sed varius justo neque id sapien. Integer euismod dui non augue
                    luctus, eu auctor metus varius. Aenean sed dui ut sapien malesuada sollicitudin.
                </p>
            </section>

            {/* Services Cards Section */}
            <section className="bg-gray-50 text-gray-900 py-24 px-6 md:px-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12" data-aos="fade up">
                    {/* Service 1: Data & Voice Cabling */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow" >
                        <div className="flex items-center justify-center mb-4">
                            <FaPlug className="text-5xl text-[#e79c8b]" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Data & Voice Cabling</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, lectus sit amet ultrices
                            scelerisque, sapien erat feugiat libero. Sed varius justo neque id sapien. Integer euismod dui non augue
                            luctus.
                        </p>
                        <p className="text-xl text-gray-800">~$300 - pricing may vary</p>
                    </div>

                    {/* Service 2: Fiber Optic Cabling */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center mb-4">
                            <FaWrench className="text-5xl text-[#e79c8b]" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Fiber Optic Cabling</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, lectus sit amet ultrices
                            scelerisque, sapien erat feugiat libero. Sed varius justo neque id sapien. Integer euismod dui non augue
                            luctus.
                        </p>
                        <p className="text-xl text-gray-800">$400</p>
                    </div>

                    {/* Service 3: Surveillance Systems */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center mb-4">
                            <FaCamera className="text-5xl text-[#e79c8b]" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Surveillance Systems</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, lectus sit amet ultrices
                            scelerisque, sapien erat feugiat libero. Sed varius justo neque id sapien. Integer euismod dui non augue
                            luctus.
                        </p>
                        <p className="text-xl text-gray-800">$500</p>
                    </div>

                    {/* Service 4: Entry Systems */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center mb-4">
                            <FaLock className="text-5xl text-[#e79c8b]" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Entry Systems</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, lectus sit amet ultrices
                            scelerisque, sapien erat feugiat libero. Sed varius justo neque id sapien. Integer euismod dui non augue
                            luctus.
                        </p>
                        <p className="text-xl text-gray-800">$350</p>
                    </div>

                    {/* Service 5: Nurse Call Stations */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center mb-4">
                            <FaBell className="text-5xl text-[#e79c8b]" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Nurse Call Stations</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, lectus sit amet ultrices
                            scelerisque, sapien erat feugiat libero. Sed varius justo neque id sapien. Integer euismod dui non augue
                            luctus.
                        </p>
                        <p className="text-xl text-gray-800">$300</p>
                    </div>

                    {/* Service 6: Data & Voice Solutions */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center mb-4">
                            <FaNetworkWired className="text-5xl text-[#e79c8b]" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Data & Voice Solutions</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, lectus sit amet ultrices
                            scelerisque, sapien erat feugiat libero. Sed varius justo neque id sapien. Integer euismod dui non augue
                            luctus.
                        </p>
                        <p className="text-xl text-gray-800">$350</p>
                    </div>
                </div>

                {/* Final CTA Section */}
                <div className="text-center mt-12">
                    <Link to="/contact">
                        <a href="#contact" className="bg-[#e79c8b] hover:bg-[#d98978] text-white font-semibold px-8 py-3 rounded-md transition">
                            Book a Consultation
                        </a>
                    </Link>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-900 text-white py-12 px-6 text-center">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-6">
                        <a href="#services" className="text-gray-400 hover:text-white px-4">Services</a>
                        <a href="#contact" className="text-gray-400 hover:text-white px-4">Contact</a>
                        <a href="#about" className="text-gray-400 hover:text-white px-4">About</a>
                    </div>
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} California Compliance Security Services. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Services;
