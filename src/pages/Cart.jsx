import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";

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
              <CartItem
                key={index}
                item={item}
                index={index}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>

          <CartSummary total={total} clearCart={clearCart} />
        </div>
      )}
    </div>
  );
}
