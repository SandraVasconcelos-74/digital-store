import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const { cartItems } = useContext(CartContext);

  return (
    <header className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        <Link to="/" className="text-xl font-bold">
          Digital Store
        </Link>

        <nav className="flex gap-6 items-center">
          <Link to="/" className="hover:text-gray-300 transition">
            Home
          </Link>

          <Link to="/produtos" className="hover:text-gray-300 transition">
            Produtos
          </Link>

          <Link to="/carrinho" className="text-lg font-medium">
            🛒 ({cartItems.length})
          </Link>
        </nav>

      </div>
    </header>
  );
}
