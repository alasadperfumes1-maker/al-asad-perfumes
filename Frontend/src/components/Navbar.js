"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <nav
            className={`
    fixed top-0 left-0 w-full z-50
    transition-all duration-300
    ${scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"}
  `}
        >


            <div className="flex items-center justify-between px-6 py-4 lg:px-20">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-26 h-12 md:w-36 md:h-16">
                        <Image
                            src="/images/logo.png"
                            alt="Al Asad Perfumes"
                            fill
                            className="object-contain"
                        />
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8 text-white font-medium">
                    <Link href="/" className="hover:text-[#C6A14A] transition">Home</Link>
                    <Link href="/collection" className="hover:text-[#C6A14A] transition">Collection</Link>
                    <Link href="/about" className="hover:text-[#C6A14A] transition">About</Link>
                    <Link href="/contact" className="hover:text-[#C6A14A] transition">Contact</Link>
                </div>

                {/* Hamburger */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="md:hidden text-white text-2xl"
                >
                    ☰
                </button>

            </div>

            {/* Overlay */}
            <div
                className={`
          fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
                onClick={() => setIsOpen(false)}
            ></div>

            {/* Side Drawer */}
            <div
                className={`
          fixed top-0 right-0 h-full w-64 bg-[#0B0B0B] shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
            >
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
                    <span className="text-[#C6A14A] font-semibold">Menu</span>
                    <button onClick={() => setIsOpen(false)}>✕</button>
                </div>

                <div className="flex flex-col gap-6 px-6 py-8 text-white">
                    <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/collection" onClick={() => setIsOpen(false)}>Collection</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            </div>

        </nav>
    );
}
