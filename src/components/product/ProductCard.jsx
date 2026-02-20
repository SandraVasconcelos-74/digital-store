import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ProductCard({ title, price, oldPrice, image }) {
  const { addToCart } = useContext(CartContext);

  // Lógica de desconto mantida
  const discount = oldPrice && Math.round(((oldPrice - price) / oldPrice) * 100);

  function handleAddToCart() {
    addToCart({ title, price, oldPrice, image });
  }

  return (
    /* Adicionado 'flex flex-col h-full' para garantir que os cards tenham a mesma altura */
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 p-4 relative flex flex-col h-full">
      
      {discount && (
        <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-md z-10">
          {discount}% OFF
        </span>
      )}

      <div className="overflow-hidden rounded-xl bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Este div 'flex-1' empurra os botões para baixo, mantendo o alinhamento */}
      <div className="flex-1 flex flex-col mt-4">
        <span className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Sapato</span>
        
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {title}
        </h3>

        <div className="mt-2 flex items-center gap-3">
          {oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              R$ {oldPrice.toFixed(2)}
            </span>
          )}
          <span className="text-gray-900 font-bold text-xl">
            R$ {price.toFixed(2)}
          </span>
        </div>
      </div>

      {/* ÁREA DE BOTÕES - Agora com hierarquia visual */}
      <div className="mt-6 space-y-2">
        {/* Botão Primário: COMPRAR */}
        <button className="w-full bg-pink-500 text-white py-3 rounded-lg font-bold hover:bg-pink-600 active:scale-95 transition-all shadow-md shadow-pink-100">
          Comprar
        </button>

        {/* Botão Secundário: ADICIONAR AO CARRINHO */}
        <button 
          onClick={handleAddToCart}
          className="w-full bg-transparent text-gray-500 py-2 rounded-lg font-medium hover:text-pink-500 hover:bg-pink-50 transition-colors border border-transparent"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
