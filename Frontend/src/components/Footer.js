import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#603010] text-gray-400">

      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand Section */}
        <div>
          <h3 className="text-2xl font-bold text-[#C6A14A]">
            Al Asad Perfumes
          </h3>
          <p className="mt-4 text-sm leading-relaxed">
            Signature fragrances crafted to elevate your presence.
            Discover refined blends designed for confidence and lasting impression.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">
            Quick Links
          </h4>

          <ul className="space-y-3">
            <li>
              <Link href="/" className="hover:text-[#C6A14A] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/collection" className="hover:text-[#C6A14A] transition">
                Collection
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#C6A14A] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#C6A14A] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">
            Contact Us
          </h4>

          <p className="text-sm">
            📍 Pakistan
          </p>
          <p className="text-sm mt-2">
            <a href="tel:+923192419226" className=" hover:underline">📞 +92 319 2419226</a>
          </p>
          <p className="text-sm mt-2">
            <a href="mailto:alasadperfumes1@gmail.com" className="hover:underline">✉ alasadperfumes1@gmail.com</a>
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">

            <a
              href="https://www.facebook.com/alasadperfumess" target="_blank"
              className="w-12 h-12 flex items-center justify-center border border-[#C6A14A] rounded-full hover:bg-[#C6A14A] hover:text-black transition"
            >
              <Image src="/facebook.svg" width={35} height={35} alt="Facebook" />
            </a>

            <a
              href="https://www.instagram.com/alasadperfumes" target="_blank"
              className="w-12 h-12 flex items-center justify-center border border-[#C6A14A] rounded-full hover:bg-[#C6A14A] hover:text-black transition"
            >
              <Image src="/instagram.svg" width={30} height={30} alt="Instagram" />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#603010] py-6 text-center text-sm">
        © {new Date().getFullYear()} Al Asad Perfumes. All rights reserved.
      </div>

    </footer>
  );
}
