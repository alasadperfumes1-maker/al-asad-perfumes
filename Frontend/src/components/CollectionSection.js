"use client";

import { useState } from "react";
import { products } from "@/app/data/products";
import ProductCard from "@/components/ProductCard";

export default function CollectionSection() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProducts =
        activeCategory === "all"
            ? products
            : products.filter(
                (product) => product.category === activeCategory || product.category === "unisex" 
            );

    return (
        <section className="bg-[#0B0B0B] py-20 px-6 lg:px-20">

            {/* Filter Tabs */}
            <div className="flex justify-center mb-14">
                <div className="flex bg-[#111] rounded-full p-1 border border-[#603010]">

                    {["all", "men", "women"].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`
                px-6 py-2 rounded-full capitalize font-medium transition-all duration-300
                ${activeCategory === cat
                                    ? "bg-[#C6A14A] text-black"
                                    : "text-[#C6A14A] hover:bg-[#C6A14A]/20"
                                }
              `}
                        >
                            {cat}
                        </button>
                    ))}

                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
                <p className="text-center text-gray-400 mt-10">
                    No products available in this category.
                </p>
            )}

        </section>
    );
}
