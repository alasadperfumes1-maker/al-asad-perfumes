"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const whatsappURL = `https://wa.me/923192419226?text=${encodeURIComponent(
            `Assalam o Alaikum,

Name: ${formData.name}

Message:
${formData.message}`
        )}`;

        window.open(whatsappURL, "_blank");
    };

    return (
        <section className="bg-[#0B0B0B] min-h-screen">

            {/* Top Banner */}
            <div className="relative h-[40vh] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/images/hero-bg.png')" }}
            >
                <div className="absolute inset-0 bg-black/75"></div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#C6A14A]">
                        Get In Touch
                    </h1>
                    <p className="text-gray-300 mt-4">
                        We'd love to hear from you.
                    </p>
                </div>
            </div>

            {/* Contact Card Section */}
            <div className="px-6 lg:px-20 py-20">
                <div className="max-w-6xl mx-auto bg-[#111] border border-[#603010] rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">

                    {/* Left Info Section */}
                    <div className="p-10 bg-gradient-to-br from-[#111] to-[#1a1a1a]">

                        <h2 className="text-2xl font-semibold text-[#C6A14A]">
                            Contact Information
                        </h2>

                        <div className="mt-8 space-y-5 text-gray-300 text-sm">

                            <p>📍 Pakistan</p>
                            <p><a href="tel:+923192419226" className=" hover:underline">📞 +92 319 2419226</a></p>
                            <p><a href="mailto:alasadperfumes1@gmail.com" className="hover:underline">✉ alasadperfumes1@gmail.com</a></p>

                        </div>

                        {/* Social Links */}
                        <div className="mt-10">
                            <h3 className="text-white mb-4">Follow Us</h3>

                            <div className="flex gap-4">

                                <a
                                    href="https://www.facebook.com/alasadperfumess" target="_blank"
                                    className="w-12 h-12 flex items-center justify-center border border-[#C6A14A] rounded-full hover:bg-[#C6A14A] hover:text-black transition"
                                >
                                    <Image src="/facebook.svg" width={35} height={35} alt="Facebook" />
                                </a>

                                <a
                                    href="https://www.instagram.com/alasadperfumes"
                                    target="_blank"
                                    className="w-12 h-12 flex items-center justify-center border border-[#C6A14A] rounded-full hover:bg-[#C6A14A] hover:text-black transition"
                                >
                                    <Image src="/instagram.svg" width={30} height={30} alt="Instagram" />
                                </a>


                            </div>
                        </div>

                    </div>

                    {/* Right Form Section */}
                    <div className="p-10 bg-black">

                        <h2 className="text-2xl font-semibold text-[#C6A14A] mb-8">
                            Send a Message
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">

                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#111] border border-[#603010] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#C6A14A]"
                            />

                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#111] border border-[#603010] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#C6A14A]"
                            />

                            <button
                                type="submit"
                                className="w-full bg-[#C6A14A] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#D4AF37] transition"
                            >
                                Send via WhatsApp
                            </button>

                        </form>

                    </div>

                </div>
            </div>

        </section>
    );
}
