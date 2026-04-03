import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <section className="py-16">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Modern Vending Solutions for Your Space
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            Precision Vending provides smart vending machines and curated snack
            selections for offices, apartments, gyms, and shared spaces across
            San Diego.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/machines"
              className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
            >
              View Machines
            </Link>

            <Link
              href="/inquiry"
              className="rounded-lg border border-white px-6 py-3 font-medium text-white transition hover:bg-white hover:text-black"
            >
              Request Service
            </Link>
          </div>
        </section>

        <section className="mt-24">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-grey-700 bg-gray-900 p-6">
              <h3 className="text-xl font-semibold">Smart Machines</h3>
              <p className="mt-2 text--400">
                Modern vending technology with cashless payments and real-time
                tracking.
              </p>
            </div>

            <div className="rounded-xl border border-gray-700 bg-gray-900 p-6">
              <h3 className="text-xl font-semibold">Custom Selection</h3>
              <p className="mt-2 text-gray-400">
                Choose exactly what products fit your location and audience.
              </p>
            </div>

            <div className="rounded-xl border border-gray-700 bg-gray-900 p-6">
              <h3 className="text-xl font-semibold">Full Service</h3>
              <p className="mt-2 text-gray-400">
                We handle installation, restocking, and maintenance for you.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}