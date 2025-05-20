import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Importing local images
import proj1Img1 from "../assets/proj1_1.jpg";
import proj1Img2 from "../assets/proj1_2.jpg";
import proj1Img3 from "../assets/proj1_3.jpg";
import proj2Img1 from "../assets/proj2_1.jpg";
import proj2Img2 from "../assets/proj2_2.jpg";
import proj2Img3 from "../assets/proj2_3.jpg";
import proj3Img1 from "../assets/proj3_1.jpg";
import proj3Img2 from "../assets/proj3_2.jpg";
import proj3Img3 from "../assets/proj3_3.jpg";

const categories = [
    { label: "All", value: "all" },
    { label: "Surveillance", value: "surveillance" },
    { label: "Automation", value: "automation" },
    { label: "Cabling", value: "cabling" },
];

const allImages = [
    { src: proj1Img1, tag: "Surveillance", title: "Perimeter Camera Setup", category: "surveillance" },
    { src: proj1Img2, tag: "Surveillance", title: "24/7 Monitoring System", category: "surveillance" },
    { src: proj1Img3, tag: "Surveillance", title: "High-Rise Security Install", category: "surveillance" },
    { src: proj2Img1, tag: "Automation", title: "Smart Home Lighting", category: "automation" },
    { src: proj2Img2, tag: "Automation", title: "Climate Control Integration", category: "automation" },
    { src: proj2Img3, tag: "Automation", title: "Voice Command Features", category: "automation" },
    { src: proj3Img1, tag: "Cabling", title: "Structured Wiring Installation", category: "cabling" },
    { src: proj3Img2, tag: "Cabling", title: "Data Center Network Cabling", category: "cabling" },
    { src: proj3Img3, tag: "Cabling", title: "Fiber Optic Line Setup", category: "cabling" },
];

function Gallery() {
    const [filter, setFilter] = useState("all");
    console.log('test')

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredImages =
        filter === "all" ? allImages : allImages.filter((img) => img.category === filter);

    return (
        <div className="text-gray-900 bg-white font-sans">
            <Helmet>
                <title>Our Projects | California Compliance Security Services</title>
                <meta
                    name="description"
                    content="Explore featured projects by California Compliance Security Services, showcasing expert low voltage and automation installations."
                />
            </Helmet>

            <Navbar />

            <section className="relative py-24 px-6 md:px-16">
                <div className="max-w-7xl mx-auto flex flex-col gap-16">
                    <div className="text-center flex flex-col items-center md:items-end md:flex-row md:text-left md:justify-between gap-6">
                        <div>
                            <span className="block text-sm uppercase text-[#e79c8b] font-semibold">Our Portfolio</span>
                            <h2 className="text-4xl font-bold text-gray-900 mt-2">Featured Projects</h2>
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start border-b border-gray-200 pb-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.value}
                                    onClick={() => setFilter(cat.value)}
                                    className={`text-sm font-semibold pb-2 border-b-2 transition-colors duration-200 ${filter === cat.value
                                            ? "border-[#e79c8b] text-[#e79c8b]"
                                            : "border-transparent text-gray-700 hover:text-[#e79c8b]"
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredImages.map(({ src, tag, title }, i) => (
                            <a
                                key={`${filter}-${i}`}
                                href="#"
                                className="relative overflow-hidden group h-80 transition-all duration-500 ease-out opacity-0 translate-y-4 animate-[fadeIn_0.5s_forwards]"
                            >
                                <img
                                    src={src}
                                    alt={title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-60"
                                />
                                <div className="absolute bottom-4 left-4 z-10 space-y-2">
                                    <span className="bg-[#e79c8b] text-white text-xs font-bold uppercase px-3 py-1 inline-block">
                                        {tag}
                                    </span>
                                    <span className="bg-white text-gray-900 text-sm font-semibold px-3 py-1 inline-block">
                                        {title}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                {/* comment for heroku */}
            </section>

            <Footer />
        </div>
    );
}

export default Gallery;
