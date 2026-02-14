import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Digital Store
        </Link>

        <nav className="flex gap-6">
          <Link to="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link to="/produtos" className="hover:text-gray-300 transition">
            Produtos
          </Link>
        </nav>
      </div>
    </header>
  )
}
