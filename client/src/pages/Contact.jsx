import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar"; 
import Footer from '../components/Footer';
import { useLocation } from "react-router-dom";

function Contact() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    const location = useLocation();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    //const backendUrl = 'http://localhost:5000'  
    console.log('is this going through: ', backendUrl)
    console.log('loading environment variables: ', process.env)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location]);


    // Handle the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        // Email validation using a regex pattern
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(data.email)) {
            setStatus("Please enter a valid email address.");
            return;
        }

        setLoading(true);
        setStatus("Sending...");

        try {
            const response = await fetch(`${backendUrl}/api/send-email`, { // Use the backend URL from the environment variable
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("Message sent successfully!");
            } else {
                setStatus("Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus("Error: " + error.message);
        }

        setLoading(false);
    };

    return (
        <div className="text-gray-900 bg-white font-sans">
            <Navbar />

            {/* Contact Form Section */}
            <section className="min-h-screen py-12 px-6 text-center bg-gray-50 mt-24"> {/* Adjusted to min-h-screen for better mobile fit */}
                <h2 className="text-4xl md:text-5xl font-semibold mb-8">Contact Us</h2>
                <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12">
                    Have a question? Get in touch with us, and our team will respond as soon as possible.
                </p>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
                    {/* Contact Information */}
                    <div className="text-left space-y-4 mb-12 md:mb-0">
                        <h3 className="text-xl font-semibold">Contact Information</h3>
                        <p>Email: <a href="mailto:email@example.com" className="text-[#e79c8b]">email@example.com</a></p>
                        <p>Phone: <span className="text-[#e79c8b]">(555) 555-5555</span></p>
                        <p>Address: 123 Demo Street, New York, NY 12345</p>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-left mb-2 text-gray-700 text-xl">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full p-4 border border-gray-300 rounded-md text-lg"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-left mb-2 text-gray-700 text-xl">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-4 border border-gray-300 rounded-md text-lg"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-left mb-2 text-gray-700 text-xl">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                className="w-full p-4 border border-gray-300 rounded-md text-lg"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-[#e79c8b] hover:bg-[#d98978] text-white font-semibold px-8 py-4 rounded-md transition"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                        {status && <p className="text-center mt-4">{status}</p>}
                    </form>
                </div>
            </section>

            {/* Footer Section */}
            <Footer />
        </div>
    );
}

export default Contact;
