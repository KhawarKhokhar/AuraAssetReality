export function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">About Aura Asset</h2>
          <p className="text-gray-700 mb-4">
            Based in the heart of Texas, Aura Assets is your trusted partner in buying, selling, 
            and investing in real estate. With years of experience and deep local market insights, 
            we connect clients to properties that perfectly match their goals.
          </p>
          <p className="text-gray-600">
            Whether you’re purchasing your first home, expanding investments, or selling your 
            property, we make the process seamless and transparent.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80"
            alt="Texas Homes"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
