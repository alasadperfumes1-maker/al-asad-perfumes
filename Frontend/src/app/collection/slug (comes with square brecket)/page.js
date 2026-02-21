// "use client";

// import { products } from "@/data/products";
// import { notFound } from "next/navigation";
// import { openWhatsAppOrder } from "@/lib/whatsapp";
// import Image from "next/image";

// export function generateStaticParams() {
//   return products.map((product) => ({
//     slug: product.slug,
//   }));
// }

// export function generateMetadata({ params }) {
//   const product = products.find(
//     (item) => item.slug === params.slug
//   );

//   if (!product) {
//     return {
//       title: "Product Not Found",
//     };
//   }

//   return {
//     title: `${product.name} | Al Asad Perfumes`,
//     description: product.description,
//   };
// }

// export default function ProductDetailPage({ params }) {
//   const product = products.find(
//     (item) => item.slug === params.slug
//   );

//   if (!product) {
//     notFound();
//   }

//   return (
//     <section className="bg-[#0B0B0B] min-h-screen px-6 lg:px-20 py-24">

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//         <div className="relative w-full h-[400px] bg-black rounded-xl flex items-center justify-center">
//           <Image
//             src={product.image}
//             alt={product.name}
//             fill
//             className="object-contain"
//           />
//         </div>

//         <div>
//           <span className="bg-[#C6A14A] text-black text-xs px-3 py-1 rounded-full capitalize font-semibold">
//             {product.category}
//           </span>

//           <h1 className="text-4xl md:text-5xl font-bold text-[#C6A14A] mt-6">
//             {product.name}
//           </h1>

//           <p className="text-gray-400 mt-4 text-lg">
//             {product.tagline}
//           </p>

//           <p className="text-gray-300 mt-6 leading-relaxed">
//             {product.description}
//           </p>

//           <div className="mt-8 space-y-3">
//             <p className="text-white font-medium">
//               Size: {product.size}
//             </p>
//             <p className="text-white font-medium">
//               Price: Rs. {product.price}
//             </p>
//           </div>

//           <button
//             onClick={() => openWhatsAppOrder(product)}
//             className="mt-10 bg-[#C6A14A] text-black px-8 py-3 rounded-md font-semibold hover:bg-[#D4AF37] transition"
//           >
//             Order on WhatsApp
//           </button>
//         </div>

//       </div>

//     </section>
//   );
// }
