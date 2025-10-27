export function OurProcess() {
  const steps = [
    { step: "01", title: "Consultation", desc: "We discuss your goals and property preferences." },
    { step: "02", title: "Property Search", desc: "We find homes that match your needs and budget." },
    { step: "03", title: "Negotiation", desc: "We handle offers and counteroffers professionally." },
    { step: "04", title: "Closing Deal", desc: "We finalize the deal and hand over your new property." },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">Our Buying Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="p-6 border border-gray-200 rounded-xl">
              <div className="text-blue-600 font-bold text-2xl mb-2">{s.step}</div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
