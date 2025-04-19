import Navbar from "../components/Navbar";
import heroImage from "../assets/hero.jpg";
import section1Image from "../assets/default.jpeg";
import section2Image from "../assets/default.jpeg";  // Tailored Security Solutions Image
import approachImage from "../assets/default.jpeg"; // Our Approach Image
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function About() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
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
                        Your Trusted Partner in Security Solutions
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-5xl" data-aos="fade-up" data-aos-delay="100">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet scelerisque lectus, id tincidunt purus.
                    </p>
                    <p>picture will be added</p>
                </div>
            </section>

            {/* Our Expertise Section */}
            <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-24 text-center bg-gray-50" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-3xl md:text-5xl font-semibold mb-8">
                    Our Expertise
                </h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-4xl mb-12 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, lectus sit amet ultrices scelerisque, sapien erat feugiat libero. Sed varius justo neque id sapien. Integer euismod dui non augue luctus. Pellentesque ut tristique justo. Nulla facilisi. Sed viverra non sapien ut tincidunt. Ut vestibulum ac erat at suscipit.
                </p>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <img
                            src={section1Image}
                            alt="Technician at work"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                    <div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">Professional Staff</h3>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat, ligula in eleifend vulputate, purus urna scelerisque eros, vitae facilisis nunc libero sit amet lorem. Duis at est eu orci fringilla aliquet sit amet id nisi. Curabitur euismod metus ut nulla sollicitudin, sed aliquet eros placerat.
                        </p>
                    </div>
                </div>
            </section>

            {/* Tailored Security Solutions */}
            <section className="bg-white text-gray-900 min-h-screen flex flex-col justify-center px-6 md:px-16 py-24" data-aos="fade-up" data-aos-delay="300">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="order-1 md:order-2">
                        <img
                            src={section2Image}
                            alt="Tailored Solutions"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                    <div className="order-2 md:order-1">
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">
                            Tailored Security Solutions
                        </h3>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            Donec malesuada, justo ut fringilla fermentum, erat dui sodales nisi, ac tempus sem ligula ut elit. Suspendisse potenti. Mauris consequat orci sit amet dui varius, nec cursus ante tincidunt. Phasellus nec justo ut metus dapibus gravida. Aliquam erat volutpat. Nulla sed suscipit lorem.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="bg-gray-50 text-gray-900 py-24 px-6 md:px-16" data-aos="fade-up" data-aos-delay="400">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <img
                            src={approachImage}
                            alt="Our Approach"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                    <div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">
                            Our Approach
                        </h3>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            Curabitur sit amet gravida magna. Suspendisse euismod augue id velit euismod, ac venenatis libero tempor. Nam ut orci erat. Nulla facilisi. Etiam pharetra diam ut justo lacinia, et posuere tortor hendrerit. Donec at felis arcu. Phasellus eget ante eu ligula feugiat faucibus nec in ante.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-gray-100 text-gray-900 py-24 px-6 text-center" data-aos="fade-up" data-aos-delay="500">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Secure Your Property?
                </h2>
                <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
                    Get in touch with our team to discuss your security needs and get started today!
                </p>
                <a href="#contact" className="bg-[#e79c8b] hover:bg-[#d98978] text-white font-semibold px-8 py-3 rounded-md transition">
                    Contact Us
                </a>
            </section>

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

export default About;
