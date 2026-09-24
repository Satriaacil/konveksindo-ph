function ProductCard({ products }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((item) => (
        <div
          key={item.id}
          className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
        >
          <div>
            {/* Badge / Inisial Produk */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-xl font-bold text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
              {item.name.charAt(0)}
            </div>

            <h3 className="text-xl font-bold text-black transition-colors group-hover:text-red-600">{item.name}</h3>

            <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
          </div>

          <div className="mt-6 border-t border-gray-100 pt-4">
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition-colors hover:text-black">
              Pesan Produk
              <span>→</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
