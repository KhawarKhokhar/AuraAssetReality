"use client";

import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')", // Texas luxury home image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find Your Dream Property in <span className="text-blue-400">Texas</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          At Aura Assets, we help you buy, sell, and invest in Texas real estate with confidence and ease.
        </p>

        <div className="space-x-4">
          <Link
            href="/properties"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium text-white transition"
          >
            Browse Properties
          </Link>
          <Link
            href="/contact-us"
            className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-700 transition"
          >
            Contact Agent
          </Link>
        </div>
      </div>
    </section>
  );
}
