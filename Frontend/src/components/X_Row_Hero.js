"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#0B0B0B] text-white overflow-hidden">
      
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B] to-[#603010]/40 opacity-90"></div>

      <div className="relative container mx-auto px-6 py-24 lg:py-32 flex flex-col lg:flex-row items-center">

        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-[#C6A14A]">
              Crafted Scents.
            </span>
            <br />
            Lasting Impressions.
          </h1>

          <p className="text-gray-300 text-lg max-w-lg mx-auto lg:mx-0">
            Discover signature fragrances designed to elevate your presence. 
            Experience refined blends crafted for confidence and character.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            
            <Link
              href="/collection"
              className="bg-[#C6A14A] hover:bg-[#D4AF37] text-black font-semibold px-6 py-3 rounded-md transition duration-300 shadow-lg"
            >
              View Collection
            </Link>

            <a
              href="https://wa.me/923211221136"
              target="_blank"
              className="border border-[#C6A14A] text-[#C6A14A] hover:bg-[#C6A14A] hover:text-black font-semibold px-6 py-3 rounded-md transition duration-300"
            >
              Order on WhatsApp
            </a>

          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <div className="relative w-[280px] h-[400px] md:w-[350px] md:h-[500px]">
            <Image
              src="/images/hero-perfume.png"
              alt="Al Asad Perfume"
              fill
              className="object-contain drop-shadow-[0_0_40px_rgba(198,161,74,0.4)]"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
