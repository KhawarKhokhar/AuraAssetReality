"use client";

import React from "react";

export default function ServicesPage() {
  const services = [
    {
      title: "Property Buying Assistance",
      desc: "Find your dream property in Texas with expert guidance. We analyze market trends, handle negotiations, and ensure you get the best deal possible.",
      icon: "🏠",
      img: "https://plus.unsplash.com/premium_photo-1663089990469-b310e96c6b09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1173",
    },
    {
      title: "Property Selling & Marketing",
      desc: "Sell your property fast and profitably. We use digital marketing, MLS listings, and professional staging to attract the right buyers.",
      icon: "💼",
      img: "https://plus.unsplash.com/premium_photo-1661659232931-1d4e811b28c2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
    {
      title: "Real Estate Investment Consulting",
      desc: "Maximize your ROI with data-driven insights and personalized investment strategies tailored for the Texas property market.",
      icon: "📊",
      img: "https://images.unsplash.com/photo-1759429084833-334282cbd58d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
    {
      title: "Property Management",
      desc: "Let us handle the hard work — from rent collection to maintenance and tenant screening. Reliable management for peace of mind.",
      icon: "🔑",
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Home Valuation",
      desc: "Curious about your property’s worth? We provide accurate, data-backed valuations to help you sell or refinance with confidence.",
      icon: "💰",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Legal & Paperwork Support",
      desc: "From title transfers to contract review, our experts make sure every transaction is smooth, secure, and compliant with Texas laws.",
      icon: "📜",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4">Our Real Estate Services</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Comprehensive real estate solutions — from buying your first home to managing your
            investment properties across Texas.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-xl transition text-left overflow-hidden"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="text-4xl mb-3">{s.icon}</div>
                  <h3 className="font-semibold text-xl text-blue-700 mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-10">Why Work With Aura Asset?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Texas Market Expertise",
                desc: "We understand every neighborhood, trend, and investment hotspot in Texas.",
              },
              {
                title: "Full-Service Support",
                desc: "From consultation to closing, our dedicated team handles every step for you.",
              },
              {
                title: "Proven Results",
                desc: "Hundreds of satisfied clients and millions in successful property transactions.",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-blue-50 p-8 rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2 text-blue-700">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-10">Our Simple 4-Step Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Tell us your goals and property needs." },
              { step: "02", title: "Search & Match", desc: "We find properties that fit your vision." },
              { step: "03", title: "Negotiate & Close", desc: "We secure the best terms and handle paperwork." },
              { step: "04", title: "Move In or Invest", desc: "Enjoy your new property or start earning ROI." },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="text-3xl font-bold text-blue-700 mb-2">{p.step}</div>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Looking for Your Next Property?</h2>
        <p className="mb-8 text-gray-200 max-w-2xl mx-auto">
          Partner with Aura Assets today — let’s find the perfect home or investment property in Texas for you.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
