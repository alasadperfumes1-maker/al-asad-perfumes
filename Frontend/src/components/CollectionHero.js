export default function CollectionHero() {
    return (
        <section
            className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/hero-bg.png')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/75"></div>

            <div className="relative z-10 px-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#C6A14A]">
                    Our Signature Collection
                </h1>

                <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
                    Explore premium fragrances crafted for elegance, confidence, and lasting impressions.
                </p>
            </div>
        </section>
    );
}
