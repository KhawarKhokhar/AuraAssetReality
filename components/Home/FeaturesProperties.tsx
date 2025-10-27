export function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      name: "Modern Villa in Dallas",
      price: "$850,000",
      img: "https://images.unsplash.com/photo-1693282540233-a06362aa9309?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
    {
      id: 2,
      name: "Luxury Home in Austin",
      price: "$1,200,000",
      img: "https://plus.unsplash.com/premium_photo-1661883982941-50af7720a6ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    },
    {
      id: 3,
      name: "Family House in Houston",
      price: "$640,000",
      img: "https://images.unsplash.com/photo-1606788075819-9574a6edfab3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1168",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">Featured Properties</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((p) => (
            <div key={p.id} className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img src={p.img} alt={p.name} className="h-56 w-full object-cover" />
              <div className="p-5 text-left">
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-blue-600 font-medium mt-2">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
