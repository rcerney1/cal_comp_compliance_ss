import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import proj1img1D from "../assets/gallery/proj1img1-d.webp";
import proj1img1M from "../assets/gallery/proj1img1-m.webp";
import proj1img2D from "../assets/gallery/proj1img2-d.webp";
import proj1img2M from "../assets/gallery/proj1img2-m.webp";
import proj1img3D from "../assets/gallery/proj1img3-d.webp";
import proj1img3M from "../assets/gallery/proj1img3-m.webp";
import proj1img4D from "../assets/gallery/proj1img4-d.webp";
import proj1img4M from "../assets/gallery/proj1img4-m.webp";
import proj1img5D from "../assets/gallery/proj1img5-d.webp";
import proj1img5M from "../assets/gallery/proj1img5-m.webp";
import proj1img6D from "../assets/gallery/proj1img6-d.webp";
import proj1img6M from "../assets/gallery/proj1img6-m.webp";
import proj1img7D from "../assets/gallery/proj1img7-d.webp";
import proj1img7M from "../assets/gallery/proj1img7-m.webp";

const categories = [
    { label: "All", value: "all" },
    { label: "Surveillance", value: "surveillance" },
    { label: "Automation", value: "automation" },
    { label: "Cabling", value: "cabling" },
];

const allImages = [
    {
        srcD: proj1img1D,
        srcM: proj1img1M,
        tag: "Surveillance",
        title: "Equipment Room Surveillance Rack",
        category: "surveillance",
    },
    {
        srcD: proj1img2D,
        srcM: proj1img2M,
        tag: "Surveillance",
        title: "Full Rack Installation",
        category: "surveillance",
    },
    {
        srcD: proj1img3D,
        srcM: proj1img3M,
        tag: "Automation",
        title: "Modern Home Theater Integration",
        category: "automation",
    },
    {
        srcD: proj1img4D,
        srcM: proj1img4M,
        tag: "Automation",
        title: "Luxury Media Room Setup",
        category: "automation",
    },
    {
        srcD: proj1img5D,
        srcM: proj1img5M,
        tag: "Automation",
        title: "Whole Home Lighting Control",
        category: "automation",
    },
    {
        srcD: proj1img6D,
        srcM: proj1img6M,
        tag: "Automation",
        title: "High-End AV Installation",
        category: "automation",
    },
    {
        srcD: proj1img7D,
        srcM: proj1img7M,
        tag: "Automation",
        title: "Projector Setup for Home Theater",
        category: "automation",
    },
];

function Gallery() {
    const [filter, setFilter] = useState("all");

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
                            <span className="block text-sm uppercase text-[#e79c8b] font-semibold">
                                Our Portfolio
                            </span>
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
                        {filteredImages.map(({ srcD, srcM, tag, title }, i) => (
                            <a
                                key={`${filter}-${i}`}
                                href="#"
                                className="relative overflow-hidden group h-80"
                            >
                                <picture>
                                    <source media="(max-width: 640px)" srcSet={srcM} />
                                    <source media="(min-width: 641px)" srcSet={srcD} />
                                    <img
                                        src={srcD}
                                        alt={title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-60"
                                        width="1000"
                                        height="320"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </picture>
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
            </section>

            <Footer />
        </div>
    );
}

export default Gallery;
