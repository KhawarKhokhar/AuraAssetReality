"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    alert("Thank you! We’ll reach out to you shortly.");
  };

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1296')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4">Contact Aura Assets</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            We’re here to help you buy, sell, or invest in Texas real estate. Reach out today.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you’re looking to buy your dream home, sell a property, or explore investment
              opportunities in Texas — our friendly team is ready to assist.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-700 mb-1">📍 Our Office</h3>
                <p className="text-gray-600">3101 NW 134th St, Apt 4, Opa-locka, FL 33054</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-700 mb-1">📞 Phone</h3>
                <p className="text-gray-600">(469) 577-0265</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-700 mb-1">📧 Email</h3>
                <p className="text-gray-600">info@auraassetrealty.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-700 mb-1">🕒 Office Hours</h3>
                <p className="text-gray-600">Mon–Fri: 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
{/* Google Map Section */}
<section className="py-10">
  <div className="max-w-6xl mx-auto px-6">
    <div className="h-[600px] w-full rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.242366835925!2d-96.80160142444497!3d32.77666487366545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e991b5f34b5d1%3A0x8df36c2b516b2dd5!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1698741111111!5m2!1sen!2sus"
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        className="border-0"
      ></iframe>
    </div>
  </div>
</section>
      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Real Estate Journey?</h2>
        <p className="mb-8 text-gray-200 max-w-2xl mx-auto">
          Let Aura Assets guide you — we make buying, selling, and investing in Texas real estate easy and stress-free.
        </p>
        <a
          href="tel:4695550198"
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          Call Now: (469) 577-0265
        </a>
      </section>
    </main>
  );
}
