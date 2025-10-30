"use client";

import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1661954372617-15780178eb2e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1760')", // Texas luxury home image
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
