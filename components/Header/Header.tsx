"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-2xl font-bold text-blue-700">
          Aura <span className="text-gray-800">Assets</span>
        </div>

        {/* Center: Menu */}
        <nav className="hidden md:flex space-x-8 font-bold text-gray-700">
          <Link href="/" className="hover:text-blue-700 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-700 transition">
            About
          </Link>
          <Link href="/services" className="hover:text-blue-700 transition">
            Services
          </Link>
        </nav>

        {/* Right: Button */}
        <div>
          <Link
            href="/contact-us"
            className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
