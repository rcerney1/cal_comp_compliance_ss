import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../assets/services_hero.jpg"
import { FaPlug, FaWrench, FaLock, FaCamera, FaNetworkWired, FaBell, FaBroadcastTower } from "react-icons/fa"; // Icons for services
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Services() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location]);

    return (
        <div className="text-gray-900 bg-white font-sans">
            <Navbar />
            {/* Helmet for title and meta tags */}
            <Helmet>
                <title>Our Services | California Compliance Security Services</title>
                <meta
                    name="description"
                    content="Explore our full range of professional low voltage, audio/visual, and automation services. From data cabling to entry systems, CCSS provides expert installations and equipment sales tailored to your property."
                />
                <meta
                    name="keywords"
                    content="low voltage services, security installations, audio video systems, data cabling, surveillance, access control, nurse call systems, automation solutions, CCSS services"
                />
                <meta name="author" content="California Compliance Security Services" />
            </Helmet>

            {/* Hero Section */}
            <section className="relative w-full h-screen">
                <img
                    src={Hero} // Update this with the actual image URL for the About page
                    alt="Security Service"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-start justify-end px-6 md:px-16 text-left pb-24 md:pb-40" data-aos="fade-up">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 max-w-5xl">
                        Our Security Solution
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-5xl" data-aos="fade-up" data-aos-delay="100">
                        Explore our full range of low voltage, security, and smart technology solutions designed to elevate and protect your home or business. From expert cabling to advanced automation, we deliver reliable systems built to last.
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
                    At California Compliance Security Services, we provide comprehensive low voltage solutions including
                    industry-leading security, data, and audio/visual systems. Whether you're looking to outfit your property
                    with premium surveillance or simply purchase state-of-the-art equipment, our team is here to support both
                    full-service installations and standalone product sales. All pricing is discussed during a personalized
                    walkthrough with our expert design team to ensure each solution is tailored to your unique space and needs.
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
                            Precision-installed cabling systems supporting both voice and data transmission, designed for optimal
                            signal integrity, bandwidth efficiency, and long-term performance in both residential and commercial
                            environments
                        </p>
                    </div>

                    {/* Service 2: Automation Solutions */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center mb-4">
                            <FaWrench className="text-5xl text-[#e79c8b]" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Automation Solutions</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Our automation solutions integrate cutting-edge control systems for lighting, climate, shading, and
                            audio/visual environments to create streamlined, user-friendly spaces. We offer industry-leading equipment
                            sourced from trusted manufacturers, available for both purchase and professional installation. Our systems
                            are tailored to client specifications and configured by our design team for seamless functionality and
                            long-term reliability.
                        </p>
                    </div>

                    {/* Service 3: Surveillance Systems */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center mb-4">
                            <FaCamera className="text-5xl text-[#e79c8b]" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Surveillance Systems</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            High-definition camera systems with remote monitoring capabilities, motion detection, and secure cloud
                            or on-site storage—engineered to provide comprehensive visibility and peace of mind for properties of any
                            scale.
                        </p>
                    </div>

                    {/* Service 4: Entry Systems */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center mb-4">
                            <FaLock className="text-5xl text-[#e79c8b]" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Entry Systems</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            We design and install secure entry systems that incorporate keypads, card readers, intercoms,
                            and remote access controls to regulate building access with precision. Our solutions are scalable for
                            both residential and commercial environments and integrate smoothly with existing security infrastructure.
                            Clients can choose from a curated selection of high-quality access equipment, with or without
                            installation, depending on their needs.
                        </p>
                    </div>

                    {/* Service 5: Nurse Call Stations */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center mb-4">
                            <FaBell className="text-5xl text-[#e79c8b]" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Nurse Call Stations</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Our nurse call systems are engineered to provide fast, reliable communication between patients and
                            caregivers in healthcare and assisted living environments. We offer a range of industry-compliant solutions
                            that support staff efficiency, patient safety, and regulatory standards. Systems can be purchased independently
                            or paired with professional installation for seamless integration into existing infrastructure.
                        </p>
                    </div>

                    {/* Service 6: Data & Voice Solutions */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center mb-4">
                            <FaNetworkWired className="text-5xl text-[#e79c8b]" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Data & Voice Solutions</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            We provide comprehensive data and voice solutions designed to support robust communication networks in
                            residential and commercial environments. Our systems ensure clear voice transmission and high-speed data
                            connectivity, built with structured cabling that adheres to current industry standards. Equipment is
                            available for purchase with optional expert installation tailored to your infrastructure needs.
                        </p>
                    </div>

                    <div className="col-span-full flex justify-center">
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow w-full sm:w-[48%]">
                            <div className="flex items-center justify-center mb-4">
                                <FaBroadcastTower className="text-5xl text-[#e79c8b]" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Audio 70 Volt Broadcast Systems</h3>
                            <p className="text-lg text-gray-700 mb-4">
                                Our 70-volt audio broadcast systems deliver uniform sound distribution across expansive commercial spaces
                                such as warehouses, offices, and retail environments. These scalable systems support multiple speaker zones
                                and centralized control, making them ideal for announcements and background audio. Equipment is available for
                                direct purchase or as part of a full-service professional installation.
                            </p>
                        </div>
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
            <Footer />
        </div>
    );
}

export default Services;
