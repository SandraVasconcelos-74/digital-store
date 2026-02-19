export default function CartItem({ item, index, removeFromCart }) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
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
  );
}
