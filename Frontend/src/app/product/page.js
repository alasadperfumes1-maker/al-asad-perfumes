"use client";

import { useSearchParams } from "next/navigation";
import { products } from "@/app/data/products";
import ProductDetailClient from "@/components/ProductDetailClient";

export default function ProductPage() {
    const searchParams = useSearchParams();
    const slug = searchParams.get("slug");

    const product = products.find(
        (item) => item.slug === slug
    );

    if (!product) {
        return (
            <div className="bg-[#0B0B0B] min-h-screen flex items-center justify-center text-white">
                Product not found.
            </div>
        );
    }

    return <ProductDetailClient product={product} />;
}
