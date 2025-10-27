import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className= "text-black py-10 dark:bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-3">
            Aura <span className="text-black">Assets</span>
          </h2>
          <p className="text-sm">
            Helping Texans buy and sell properties with trust and transparency.  
            Your real estate partner in Texas, USA.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
            <li><Link href="/contact-us" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-sm">📍 3101 NW 134th St, Apt 4, Opa-locka, FL 33054</p>
          <p className="text-sm">📞 (469) 577-0265</p>
          <p className="text-sm">✉️ info@auraassetrealty.com</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Aura Assets. All rights reserved.
      </div>
    </footer>
  );
}
