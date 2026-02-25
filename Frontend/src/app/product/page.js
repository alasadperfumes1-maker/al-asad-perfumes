"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/app/data/products";
import ProductDetailClient from "@/components/ProductDetailClient";
import Link from "next/link";

function ProductContent() {
    const searchParams = useSearchParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const slug = searchParams.get("slug");

        if (slug) {
            const foundProduct = products.find(
                (item) => item.slug === slug
            );
            setProduct(foundProduct || null);
        }
    }, [searchParams]);

    if (!product) {
        return (
            <div className="bg-[#0B0B0B] min-h-screen flex items-center justify-center text-white">
                <span>Select a product from the </span>
                <Link href="/collection" className="text-blue-400 hover:underline">&nbsp;Collection</Link> .

            </div>
        );
    }

    return <ProductDetailClient product={product} />;
}

export default function CollectionPage() {
    return (
        <Suspense fallback={<div className="bg-[#0B0B0B] min-h-screen" />}>
            <ProductContent />
        </Suspense>
    );
}
