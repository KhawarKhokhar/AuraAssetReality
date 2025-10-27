export function WhyChooseUs() {
  const points = [
    { title: "Trusted Local Experts", desc: "We know the Texas real estate market inside out." },
    { title: "Transparent Deals", desc: "Every transaction is handled with honesty and clarity." },
    { title: "Tailored Solutions", desc: "We match you with the perfect property or buyer." },
    { title: "End-to-End Support", desc: "From paperwork to keys — we guide you at every step." },
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">Why Choose Aura Assets</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {points.map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow text-left">
              <h3 className="font-semibold text-lg mb-2 text-blue-700">{p.title}</h3>
              <p className="text-gray-600 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
