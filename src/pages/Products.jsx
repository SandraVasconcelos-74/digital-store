import { products } from "../data/products";
import ProductCard from "../components/product/ProductCard";

export default function Products() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* SIDEBAR DE FILTROS */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-md shadow-sm">
            <h2 className="text-xl font-bold text-gray-700 mb-6 pb-2 border-b">Filtrar por</h2>

            {/* Filtro de Marca */}
            <div className="mb-8">
              <h3 className="font-semibold mb-4 text-gray-600">Marca</h3>
              <div className="space-y-3">
                {["Adidas", "Calvin Klein", "K-Swiss", "Nike", "Puma"].map((marca) => (
                  <label key={marca} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 accent-pink-500 rounded" />
                    <span className="text-gray-600 group-hover:text-pink-500 transition">{marca}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filtro de Categoria */}
            <div className="mb-8">
              <h3 className="font-semibold mb-4 text-gray-600">Categoria</h3>
              <div className="space-y-3">
                {["Esporte e lazer", "Casual", "Utilitário", "Corrida"].map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 accent-pink-500 rounded" />
                    <span className="text-gray-600 group-hover:text-pink-500 transition">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filtro de Gênero */}
            <div className="mb-8">
              <h3 className="font-semibold mb-4 text-gray-600">Gênero</h3>
              <div className="space-y-3">
                {["Masculino", "Feminino", "Unissex"].map((gen) => (
                  <label key={gen} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 accent-pink-500 rounded" />
                    <span className="text-gray-600 group-hover:text-pink-500 transition">{gen}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* LISTAGEM DE PRODUTOS */}
        <section className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-lg font-semibold text-gray-800">
              Resultados para "Produtos" - <span className="font-normal text-gray-500">{products.length} itens</span>
            </h1>
            
            {/* Ordenação rápida */}
            <select className="border border-gray-300 rounded px-3 py-2 text-gray-600 outline-none focus:border-pink-500">
              <option>Mais relevantes</option>
              <option>Menor preço</option>
              <option>Maior preço</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}