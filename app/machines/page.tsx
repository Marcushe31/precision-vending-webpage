export default function MachinesPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <section className="max-w-3xl py-12">
          <h1 className="text-4xl font-bold sm:text-5xl">Our Machines</h1>

          <p className="mt-4 text-lg text-gray-400">
            We offer a range of vending solutions tailored to your space, from
            traditional snack machines to modern smart coolers.
          </p>
        </section>

        {/* MACHINE CARDS */}
        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {/* SNACK MACHINE */}
          <div className="rounded-xl border border-gray-700 bg-gray-900 p-6">
            <h3 className="text-2xl font-semibold">Snack Machines</h3>
            <p className="mt-3 text-gray-400">
              Classic vending machines stocked with chips, candy, and everyday
              snacks.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>• High capacity</li>
              <li>• Reliable hardware</li>
              <li>• Great for offices & schools</li>
            </ul>
          </div>

          {/* DRINK MACHINE */}
          <div className="rounded-xl border border-gray-700 bg-gray-900 p-6">
            <h3 className="text-2xl font-semibold">Drink Machines</h3>
            <p className="mt-3 text-gray-400">
              Beverage-focused machines with sodas, water, and energy drinks.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>• Refrigerated units</li>
              <li>• Popular drink brands</li>
              <li>• High turnover items</li>
            </ul>
          </div>

          {/* SMART COOLER */}
          <div className="rounded-xl border border-gray-700 bg-gray-900 p-6">
            <h3 className="text-2xl font-semibold">Smart Coolers</h3>
            <p className="mt-3 text-gray-400">
              Next-gen vending with grab-and-go checkout and smart tracking.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>• Cashless experience</li>
              <li>• Real-time inventory</li>
              <li>• Premium product options</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
