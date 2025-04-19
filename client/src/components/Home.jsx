import Navbar from "./Navbar";
import heroImage from "../assets/hero.jpg";
import section1Image from "../assets/section1.jpg";
import elegantHome from "../assets/elegant_home_2.jpg"
import sophisticated from "../assets/sophisticated.jpg"
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Home() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0,0)
    }, [location]);

    return (
        <div className="text-gray-900 bg-white font-sans">
            <Navbar />
            {/* Hero Section */}
            <section className="relative w-full h-screen">
                <img
                    src={sophisticated}
                    alt="Security technician"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-start justify-end px-6 md:px-16 text-left pb-24 md:pb-40">
                    <h1
                        className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 max-w-5xl"
                        data-aos="fade-up"
                    >
                        Introducing California Compliance Security Services
                    </h1>
                    <p
                        className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-5xl"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Your trusted partner in providing discreet, reliable, and custom security solutions for premium homes and businesses.
                    </p>
                </div>
            </section>




            {/* Why Choose Us Section */}
            <section
                className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-24 text-center bg-gray-50"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <h2 className="text-3xl md:text-5xl font-semibold mb-8">
                    Why Choose California Compliance Security Services?
                </h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-4xl mb-12 leading-relaxed">
                    We specialize in designing and installing low voltage security
                    systems tailored to the unique needs of high-end homes and
                    businesses. From data and voice cabling to advanced surveillance and
                    entry systems — we deliver professional, discreet, and reliable
                    service every time.
                </p>
                <Link to="/about">
                    <button className="bg-[#e79c8b] hover:bg-[#d98978] text-white font-medium px-8 py-3 rounded-md transition">
                        Learn More
                    </button>
                </Link>
            </section>

            {/* Peace of Mind Section */}
            <section className="bg-white text-gray-900 min-h-screen flex flex-col justify-center px-6 md:px-16 py-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <div>
                        <img
                            src={section1Image}
                            alt="Technician working"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>

                    {/* Text */}
                    <div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">
                            Providing Peace of Mind
                        </h3>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            Our skilled technicians bring years of experience to every job —
                            whether you need a new surveillance system, entry access control,
                            or comprehensive data cabling. We handle each project with
                            precision and professionalism so you can focus on what matters
                            most: protecting what’s important.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-gray-50 text-gray-900 py-24 px-6 md:px-16" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">
                    Our Services
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Service 1: Data & Voice Cabling */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center mb-4">
                            <i className="fas fa-plug text-4xl text-[#e79c8b]"></i>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Data & Voice Cabling</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Professional installation and maintenance of data and voice cabling for seamless communication.
                        </p>
                        <p className="text-sm text-gray-500">Services: <strong>Both Sales & Installation</strong></p>
                    </div>

                    {/* Service 2: Fiber Optic Cabling */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center mb-4">
                            <i className="fas fa-network-wired text-4xl text-[#e79c8b]"></i>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Fiber Optic Cabling</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Fast and reliable fiber optic installation for high-speed data transfer.
                        </p>
                        <p className="text-sm text-gray-500">Services: <strong>Both Sales & Installation</strong></p>
                    </div>

                    {/* Service 3: Audio/Video Cabling */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center mb-4">
                            <i className="fas fa-video text-4xl text-[#e79c8b]"></i>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Audio/Video Cabling</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            High-quality audio and video cabling for clear and reliable performance.
                        </p>
                        <p className="text-sm text-gray-500">Services: <strong>Installation</strong></p>
                    </div>

                    {/* Service 4: Surveillance Systems */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center mb-4">
                            <i className="fas fa-video text-4xl text-[#e79c8b]"></i>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Surveillance Systems</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Advanced surveillance systems for monitoring and protecting your property 24/7.
                        </p>
                        <p className="text-sm text-gray-500">Services: <strong>Both Sales & Installation</strong></p>
                    </div>

                    {/* Service 5: Entry Systems */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center mb-4">
                            <i className="fas fa-lock text-4xl text-[#e79c8b]"></i>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Entry Systems</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Secure and reliable entry systems to control access to your property.
                        </p>
                        <p className="text-sm text-gray-500">Services: <strong>Both Sales & Installation</strong></p>
                    </div>

                    {/* Service 6: Nurse Call Stations */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center mb-4">
                            <i className="fas fa-bell text-4xl text-[#e79c8b]"></i>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Nurse Call Stations</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Reliable nurse call stations for healthcare facilities to ensure patient safety.
                        </p>
                        <p className="text-sm text-gray-500">Services: <strong>Both Sales & Installation</strong></p>
                    </div>
                </div>

                {/* CTA Button at the Bottom */}
                <div className="text-center mt-12">
                    <Link to="/services">
                        <a
                            href="#services"
                            className="bg-[#e79c8b] hover:bg-[#d98978] text-white font-semibold px-8 py-3 rounded-md transition"
                        >
                            View Our Full Services
                        </a>
                    </Link>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-gray-100 text-gray-900 py-24 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Secure Your Property?
                </h2>
                <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
                    Our team of experts is ready to provide you with reliable, discreet, and professional security solutions tailored to your needs. Let’s get started today!
                </p>
                <Link to ="/contact">
                    <a
                        href="#"
                        className="bg-[#e79c8b] hover:bg-[#d98978] text-white font-semibold px-8 py-3 rounded-md transition"
                    >
                        Get Started
                    </a>
                </Link>
            </section>


            {/* Footer Section */}
            <footer className="bg-gray-900 text-white py-12 px-6 text-center">
                <div className="max-w-7xl mx-auto">
                    {/* Quick Links */}
                    <div className="mb-6">
                        <a href="#services" className="text-gray-400 hover:text-white px-4">Services</a>
                        <a href="#contact" className="text-gray-400 hover:text-white px-4">Contact</a>
                        <a href="#about" className="text-gray-400 hover:text-white px-4">About</a>
                    </div>


                    {/* Copyright */}
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} California Compliance Security Services. All rights reserved.
                    </p>
                </div>
            </footer>





        </div>
    );
}

export default Home;
