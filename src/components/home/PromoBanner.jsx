function PromoBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="max-w-6xl mx-auto px-4 text-center text-white">

        <h2 className="text-3xl md:text-4xl font-bold">
          Oferta Especial da Semana
        </h2>

        <p className="mt-4 text-lg opacity-90">
          Aproveite até 30% de desconto em produtos selecionados.
        </p>

        <button className="mt-8 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Ver ofertas
        </button>

      </div>
    </section>
  )
}

export default PromoBanner
