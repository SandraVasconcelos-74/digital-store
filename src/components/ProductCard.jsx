function ProductCard({ title, price, image }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4">
      
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h3 className="mt-4 text-lg font-semibold text-gray-800">
        {title}
      </h3>

      <p className="mt-2 text-blue-600 font-bold text-xl">
        R$ {price}
      </p>

      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Comprar
      </button>

    </div>
  )
}

export default ProductCard
