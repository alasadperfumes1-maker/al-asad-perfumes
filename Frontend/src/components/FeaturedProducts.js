import { products } from "@/app/data/products";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <section className="bg-[#0B0B0B] py-20 px-6 lg:px-20">

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#C6A14A]">
          Our Collection
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Explore our signature fragrances crafted for confidence and lasting impression.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/collection"
          className="bg-[#C6A14A] text-black px-8 py-3 rounded-md font-semibold hover:bg-[#D4AF37] transition"
        >
          View Full Collection
        </Link>
      </div>

    </section>
  );
}
