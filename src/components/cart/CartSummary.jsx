export default function CartSummary({ total, clearCart }) {
  return (
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
  );
}
