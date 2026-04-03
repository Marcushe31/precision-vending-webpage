import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
      <div className="text-xl font-bold">Precision Vending</div>

      <div className="flex space-x-4">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>

        <Link href="/machines" className="hover:text-gray-300">
          Machines
        </Link>

        <Link href="/products" className="hover:text-gray-300">
          Products
        </Link>

        <Link href="/inquiry" className="hover:text-gray-300">
          Inquiry
        </Link>

        <Link href="/support" className="hover:text-gray-300">
          Support
        </Link>
      </div>
    </nav>
  );
}
