export function Testimonials() {
  const reviews = [
    {
      name: "John Carter",
      text: "Aura Assets helped me find my dream home in Dallas! Professional, honest, and fast.",
    },
    {
      name: "Sarah Johnson",
      text: "The team made selling my property easy and stress-free. Highly recommend!",
    },
    {
      name: "Michael Lee",
      text: "They understood exactly what I wanted and delivered beyond expectations.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow text-left">
              <p className="text-gray-600 italic mb-4">“{r.text}”</p>
              <h4 className="font-semibold text-blue-700">{r.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
