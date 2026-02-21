"use client";

import Link from "next/link";
import Image from "next/image";
import { openWhatsAppOrder } from "@/lib/whatsapp";

export default function ProductCard({ product }) {
    return (
        <div className="bg-[#111] rounded-xl overflow-hidden shadow-lg hover:shadow-[#C6A14A]/20 transition duration-300">

            <div className="h-64 bg-black flex items-center justify-center relative">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className=" h-full w-full object-cover"
                />

                <span className="absolute top-3 left-3 bg-[#C6A14A] text-black text-xs px-3 py-1 rounded-full font-semibold capitalize">
                    {product.category}
                </span>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold text-[#C6A14A]">
                    {product.name}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                    {product.tagline}
                </p>

                <p className="text-white mt-3 font-medium">
                    Rs. {product.price}
                </p>

                <div className="flex gap-3 mt-5">

                    <button
                        onClick={() => openWhatsAppOrder(product)}
                        className="bg-[#C6A14A] text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#D4AF37] transition"
                    >
                        Buy Now
                    </button>

                    {/* 👇 updated link */}
                    <Link
                        href={`/product?slug=${product.slug}`}
                        className="border border-[#C6A14A] text-[#C6A14A] px-4 py-2 rounded-md text-sm hover:bg-[#C6A14A] hover:text-black transition"
                    >
                        Details
                    </Link>

                </div>
            </div>
        </div>
    );
}
