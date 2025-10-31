"use client";

import React from "react";

export default function AboutPage() {
  const team = [
    {
      name: "David Thompson",
      role: "Founder & CEO",
      img: "/male.png",
    },
    {
      name: "Emily Carter",
      role: "Senior Realtor",
      img: "/female.webp",
    },
    {
      name: "Michael Lee",
      role: "Investment Specialist",
      img: "/male.png",
    },
    {
      name: "Sophia Martinez",
      role: "Client Relations Manager",
      img: "/female.webp",
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1679856789403-c6fd2d5ec83c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4">About Aura Asset</h1>
          <p className="text-lg text-gray-200">
            Trusted Texas Real Estate Professionals — Making Property Dreams Come True
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Founded in Dallas, Texas, Aura Assets was built on one mission — to redefine how people
              experience real estate. Our journey began with a simple belief that property transactions 
              should be transparent, professional, and personalized.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we proudly help hundreds of Texans find their dream homes and profitable 
              investments every year. Whether you're buying your first property or expanding 
              your real estate portfolio, Aura Assets ensures your experience is seamless 
              from consultation to closing.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80"
              alt="Aura Assets Office"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To empower Texans with expert real estate guidance, helping them buy, sell, and 
              invest in properties confidently through integrity, innovation, and deep local knowledge.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To become Texas’s most trusted real estate partner — where every client feels supported,
              valued, and confident in every property decision they make.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-10">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Integrity", desc: "We conduct every deal with honesty and transparency." },
              { title: "Expertise", desc: "Our team brings years of experience in Texas real estate." },
              { title: "Community", desc: "We care about the people and neighborhoods we serve." },
              { title: "Commitment", desc: "We go the extra mile to exceed client expectations." },
            ].map((v, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-10">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-6"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-blue-700">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
        <p className="mb-8 text-gray-200">
          Connect with our team today and start your real estate journey in Texas.
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
