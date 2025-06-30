// --- truncated imports for brevity ---
import Navbar from "./Navbar";
import heroD from '../assets/home/hero-d.webp';
import heroM from '../assets/home/hero-m.webp';
import section1D from '../assets/home/section1-d.webp';
import section1M from '../assets/home/section1-m.webp';
import Footer from "./Footer";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function Home() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <Helmet>
                <title>California Compliance Security Services | Custom Low Voltage Solutions</title>
                <meta
                    name="description"
                    content="CCSS offers reliable security, audio/visual, and automation systems for homes and businesses. Expert installations and high-quality equipment tailored to your needs."
                />
                <meta name="keywords" content="low voltage, security systems, home automation, surveillance, data cabling, CCSS, California Compliance Security" />
                <meta name="author" content="California Compliance Security Services" />
            </Helmet>

            <div className="text-gray-900 bg-white font-sans">
                <Navbar />

                {/* Hero Section */}
                <section className="relative w-full h-screen">
                    <picture className="absolute inset-0 w-full h-full">
                        <source media="(max-width: 640px)" srcSet={heroM} />
                        <source media="(min-width: 641px)" srcSet={heroD} />
                        <img
                            src={heroD}
                            alt="Sophisticated Living Room"
                            className="w-full h-full object-cover object-center"
                            loading="eager"
                            fetchpriority="high"
                        />
                    </picture>

                    <div className="absolute inset-0 bg-black/40 flex flex-col items-start justify-end px-6 md:px-16 text-left pb-24 md:pb-40">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 max-w-5xl" data-aos="fade-up">
                            Introducing California Compliance Security Services
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-5xl" data-aos="fade-up" data-aos-delay="200">
                            Leading provider in home automation, audio, video, and low voltage services.
                        </p>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-5xl" data-aos="fade-up" data-aos-delay="100">
                            Your trusted partner in providing discreet, reliable, and custom security solutions for premium homes and businesses.
                        </p>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-24 text-center bg-gray-50" data-aos="fade-up" data-aos-delay="200">
                    <h2 className="text-3xl md:text-5xl font-semibold mb-8">
                        Why Choose California Compliance Security Services?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 max-w-4xl mb-12 leading-relaxed">
                        We specialize in designing and installing low voltage security systems tailored to the unique needs of high-end homes and businesses. From data and voice cabling to advanced surveillance and entry systems — we deliver professional, discreet, and reliable service every time.
                    </p>
                    <Link to="/about">
                        <button className="bg-[#e79c8b] hover:bg-[#d98978] text-[#f9f9f9] font-medium px-8 py-3 rounded-md transition">
                            Learn more about our team
                        </button>
                    </Link>
                </section>

                {/* Peace of Mind */}
                <section className="bg-white text-gray-900 min-h-screen flex flex-col justify-center px-6 md:px-16 py-24">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <picture>
                                <source media="(max-width: 600px)" srcSet={section1M} />
                                <source media="(min-width: 601px)" srcSet={section1D} />
                                <img
                                    src={section1D}
                                    alt="Technician working"
                                    className="w-full h-auto rounded-lg shadow-md"
                                    loading="lazy"
                                    decoding="async"
                                    width="640"
                                    height="426"
                                />
                            </picture>
                        </div>
                        <div>
                            <h3 className="text-4xl md:text-5xl font-bold mb-6">Providing Peace of Mind</h3>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                Our skilled technicians bring years of experience to every job — whether you need a new surveillance system, entry access control, or comprehensive data cabling. We handle each project with precision and professionalism so you can focus on what matters most: protecting what’s important.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section className="bg-gray-50 text-gray-900 py-24 px-6 md:px-16" data-aos="fade-up" data-aos-delay="200">
                    <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">Our Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            { icon: "plug", title: "Data & Voice Cabling", desc: "Professional installation and maintenance of data and voice cabling for seamless communication.", services: "Both Sales & Installation" },
                            { icon: "cogs", title: "Automation Solutions", desc: "Streamline your home or business with reliable, industry-leading automation systems that put you in control.", services: "Installation" },
                            { icon: "video", title: "Audio/Video Cabling", desc: "High-quality audio and video cabling for clear and reliable performance.", services: "Installation" },
                            { icon: "video", title: "Surveillance Systems", desc: "Advanced surveillance systems for monitoring and protecting your property 24/7.", services: "Both Sales & Installation" },
                            { icon: "lock", title: "Entry Systems", desc: "Secure and reliable entry systems to control access to your property.", services: "Both Sales & Installation" },
                            { icon: "bell", title: "Nurse Call Stations", desc: "Reliable nurse call stations for healthcare facilities to ensure patient safety.", services: "Both Sales & Installation" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                <div className="flex items-center justify-center mb-4">
                                    <i className={`fas fa-${item.icon} text-4xl text-[#e79c8b]`}></i>
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                                <p className="text-lg text-gray-700 mb-4">{item.desc}</p>
                                <p className="text-sm text-gray-500">Services: <strong>{item.services}</strong></p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="text-center mt-12">
                        <Link to="/services">
                            <a
                                href="#services"
                                className="bg-[#e79c8b] hover:bg-[#d98978] text-[#f9f9f9] font-semibold px-8 py-3 rounded-md transition"
                            >
                                View Our Full Services
                            </a>
                        </Link>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gray-100 text-gray-900 py-24 px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Property?</h2>
                    <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
                        Our team of experts is ready to provide you with reliable, discreet, and professional security solutions tailored to your needs. Let’s get started today!
                    </p>
                    <Link to="/contact">
                        <a
                            href="#"
                            className="bg-[#e79c8b] hover:bg-[#d98978] text-[#f9f9f9] font-semibold px-8 py-3 rounded-md transition"
                        >
                            Get Started
                        </a>
                    </Link>
                </section>

                <Footer />
            </div>
        </>
    );
}

export default Home;
