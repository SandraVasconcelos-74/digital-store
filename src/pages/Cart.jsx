import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Seu Carrinho</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Seu carrinho está vazio.</p>
      ) : (
        <div>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-blue-600 font-bold">
                      R$ {item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remover
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <h3 className="text-xl font-bold">
              Total: R$ {total.toFixed(2)}
            </h3>

            <button
              onClick={clearCart}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Limpar Carrinho
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
