import Link from "next/link";

export const metadata = {
    title: "About Us | Al Asad Perfumes",
    description:
        "Discover the story behind Al Asad Perfumes and our passion for crafting refined fragrances.",
};

export default function AboutPage() {
    return (
        <section className="bg-[#0B0B0B] min-h-screen">

            {/* Hero Banner */}
            <div
                className="relative h-[50vh] flex items-center justify-center text-center bg-cover bg-center"
                style={{ backgroundImage: "url('/images/hero-bg.png')" }}
            >
                <div className="absolute inset-0 bg-black/75"></div>

                <div className="relative z-10 px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#C6A14A]">
                        Our Story
                    </h1>
                    <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                        Crafted with passion. Inspired by elegance.
                    </p>
                </div>
            </div>

            {/* Brand Story Section */}
            <div className="px-6 lg:px-20 py-20 max-w-6xl mx-auto">

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Text */}
                    <div>
                        <h2 className="text-3xl font-semibold text-[#C6A14A]">
                            Who We Are
                        </h2>

                        <p className="text-gray-300 mt-6 leading-relaxed">
                            Al Asad Perfumes was founded with a simple vision —
                            to create signature fragrances that leave a lasting impression.
                            Every scent is carefully blended to reflect confidence,
                            elegance, and individuality.
                        </p>

                        <p className="text-gray-400 mt-6 leading-relaxed">
                            Our fragrances are crafted for those who value refinement
                            and presence. We believe that a scent is not just a fragrance —
                            it is a statement.
                        </p>

                        <Link
                            href="/collection"
                            className="inline-block mt-8 bg-[#C6A14A] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#D4AF37] transition"
                        >
                            Explore Collection
                        </Link>
                    </div>

                    {/* Visual Card */}
                    <div className="bg-[#111] border border-[#603010] rounded-2xl p-10 shadow-lg">

                        <h3 className="text-xl font-semibold text-[#C6A14A]">
                            Our Mission
                        </h3>

                        <p className="text-gray-300 mt-4 leading-relaxed">
                            To deliver high-quality fragrances that enhance confidence
                            and elevate personal presence.
                        </p>

                        <h3 className="text-xl font-semibold text-[#C6A14A] mt-10">
                            Our Vision
                        </h3>

                        <p className="text-gray-300 mt-4 leading-relaxed">
                            To become a trusted name in premium fragrances
                            by combining quality, elegance, and authenticity.
                        </p>

                    </div>

                </div>

            </div>

            {/* Values Section */}
            <div className="bg-[#111] py-20 px-6 lg:px-20">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-3xl font-semibold text-[#C6A14A]">
                        Our Core Values
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10 mt-12">

                        <div className="p-8 border border-[#603010] rounded-xl">
                            <h4 className="text-lg font-semibold text-white">
                                Quality
                            </h4>
                            <p className="text-gray-400 mt-4 text-sm">
                                Carefully selected ingredients and refined blends.
                            </p>
                        </div>

                        <div className="p-8 border border-[#603010] rounded-xl">
                            <h4 className="text-lg font-semibold text-white">
                                Elegance
                            </h4>
                            <p className="text-gray-400 mt-4 text-sm">
                                Designed to complement your personality and presence.
                            </p>
                        </div>

                        <div className="p-8 border border-[#603010] rounded-xl">
                            <h4 className="text-lg font-semibold text-white">
                                Authenticity
                            </h4>
                            <p className="text-gray-400 mt-4 text-sm">
                                True scents crafted with integrity and passion.
                            </p>
                        </div>

                    </div>

                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 px-6 lg:px-20 text-center">
                <h2 className="text-3xl font-semibold text-[#C6A14A]">
                    Experience the Difference
                </h2>

                <p className="text-gray-400 mt-4">
                    Discover your signature fragrance today.
                </p>

                <Link
                    href="/collection"
                    className="inline-block mt-8 bg-[#C6A14A] text-black px-8 py-3 rounded-md font-semibold hover:bg-[#D4AF37] transition"
                >
                    View Collection
                </Link>
            </div>

        </section>
    );
}