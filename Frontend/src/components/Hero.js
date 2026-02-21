"use client";

import Link from "next/link";

export default function Hero() {
    return (
        <section
            className="
        relative
        w-full
        min-h-screen
        flex
        items-center
        bg-cover
        
        bg-no-repeat
      "
            style={{
                backgroundImage: "url('/images/hero-bg.png')",
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content Container */}
            <div className="relative z-10 w-full px-6 sm:px-10 lg:px-20">
                <div className="max-w-2xl text-white">

                    <h1 className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
            ">
                        <span className="text-[#C6A14A]">
                            Crafted Scents.
                        </span>
                        <br />
                        Lasting Impressions.
                    </h1>

                    <p className="
              mt-6
              text-gray-300
              text-base
              sm:text-lg
              max-w-xl
            ">
                        Discover signature fragrances crafted to elevate your presence.
                        Experience refined blends designed for confidence and character.
                    </p>

                    <div className="
              mt-8
              flex
              flex-col
              sm:flex-row
              gap-4
            ">

                        <Link
                            href="/collection"
                            className="
                bg-[#C6A14A]
                hover:bg-[#D4AF37]
                text-black
                font-semibold
                px-6
                py-3
                rounded-md
                transition
                duration-300
                text-center
              "
                        >
                            View Collection
                        </Link>

                        <a
                            href="https://wa.me/923192419226?text=I'm%20interested%20in%20your%20perfumes.%20Please%20provide%20more%20details."
                            target="_blank"
                            className="
                border
                border-[#C6A14A]
                text-[#C6A14A]
                hover:bg-[#C6A14A]
                hover:text-black
                font-semibold
                px-6
                py-3
                rounded-md
                transition
                duration-300
                text-center"
                        >
                            Order on WhatsApp
                        </a>

                    </div>

                </div>
            </div>


        </section>
    );
}
