import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage from "../assets/about_hero.jpg";
import section1Image from "../assets/about_section_1.jpg";
import section2Image from "../assets/smart_home.jpg";  // Tailored Security Solutions Image
import approachImage from "../assets/client_discussion.jpg"; // Our Approach Image
import heroImageMobile from "../assets/about_hero_4.jpg"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function About() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="text-gray-900 bg-white font-sans">
            <Navbar />
            {/* Helmet for SEO titles and meta tags*/}
            <Helmet>
                <title>About Us | California Compliance Security Services</title>
                <meta
                    name="description"
                    content="Learn more about California Compliance Security Services — a trusted provider of custom low voltage, security, and audio/visual solutions for homes and businesses across California."
                />
                <meta name="keywords" content="about CCSS, California security team, low voltage company, custom surveillance systems, A/V integrators, commercial cabling experts" />
                <meta name="author" content="California Compliance Security Services" />
            </Helmet>


            {/* Hero Section */}
            <section className="relative w-full h-screen">
                <picture>
                    <source media="(min-width: 768px)" srcSet={heroImage} />
                    <img
                        src={heroImageMobile}
                        alt="Security Service"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                </picture>

                <div className="absolute inset-0 bg-black/40 flex flex-col items-start justify-end px-6 md:px-16 text-left pb-24 md:pb-40" data-aos="fade-up">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 max-w-5xl">
                        Your Trusted Partner in Security Solutions
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-5xl" data-aos="fade-up" data-aos-delay="100">
                        Bringing smart security and A/V solutions to homes and businesses across California — with professionalism you can trust and service you can count on.
                    </p>
                </div>
            </section>


            {/* Our Expertise Section */}
            <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-24 text-center bg-gray-50" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-3xl md:text-5xl font-semibold mb-8">
                    Our Expertise
                </h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-4xl mb-12 leading-relaxed">
                    At California Compliance Security Services, we bring together years of experience and a broad range of technical expertise to deliver comprehensive low voltage solutions. From cutting-edge surveillance systems and access control to home automation, audio/video, and data cabling — our team is equipped to handle projects of all sizes with precision and care. Whether you’re upgrading a commercial property or enhancing your home’s infrastructure, we provide the tools and knowledge to keep your environment connected, secure, and efficient.
                </p>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md">
                            <img
                                src={section1Image}
                                alt="Technician at work"
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">Professional Staff</h3>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            Our team is made up of skilled, courteous professionals who take pride in their craftsmanship and attention to detail. We understand the importance of working discreetly and respectfully in both residential and commercial settings, ensuring every job is completed to the highest standards. From the initial consultation to final installation, our technicians are committed to clear communication, punctuality, and delivering a stress-free experience for every client.
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
                            Every property is different — that’s why we don’t believe in one-size-fits-all solutions. Whether you're outfitting a high-end home or a commercial facility, we take the time to understand your specific layout, concerns, and goals. From initial design to installation, we deliver fully customized security and A/V systems that align with your space and lifestyle, using only trusted, industry-leading technology.
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
                            At California Compliance Security Services, our approach is rooted in communication, precision, and trust. We begin every project by listening closely to your needs, walking through your property, and outlining a clear plan of action. Our team ensures a smooth process from start to finish, handling every detail with care so you feel confident and informed at every step.
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

            <Footer />
        </div>
    );
}

export default About;
