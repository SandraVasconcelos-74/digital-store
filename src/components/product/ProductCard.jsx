import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ProductCard({ title, price, oldPrice, image }) {
  const { addToCart } = useContext(CartContext);

  const discount =
    oldPrice && Math.round(((oldPrice - price) / oldPrice) * 100);

  function handleAddToCart() {
    addToCart({ title, price, oldPrice, image });
  }

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 p-4 relative">
      
      {discount && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
          -{discount}%
        </span>
      )}

      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-800">
        {title}
      </h3>

      <div className="mt-2 flex flex-col">
        {oldPrice && (
          <span className="text-gray-400 line-through text-sm">
            R$ {oldPrice.toFixed(2)}
          </span>
        )}

        <span className="text-blue-600 font-bold text-2xl">
          R$ {price.toFixed(2)}
        </span>
      </div>

      <button
        onClick={handleAddToCart}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition"
      >
        Adicionar ao carrinho
      </button>

      <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition">
        Comprar
      </button>
    </div>
  );
}

export default ProductCard;

