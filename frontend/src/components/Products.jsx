import ProductCard from "./ProductCard";

const productsData = [
  { id: 1, name: "Kaos", description: "Kaos custom bahan Combed premium dengan berbagai pilihan warna dan desain." },
  { id: 2, name: "Hoodie", description: "Hoodie hangat dan nyaman dengan sablon/bordir presisi tinggi." },
  { id: 3, name: "Jaket", description: "Jaket custom untuk komunitas, kantor, maupun keperluan event." },
  { id: 4, name: "Varsity", description: "Jaket varsity gaya klasik/modern dengan pilihan bahan berkualitas." },
  { id: 5, name: "Kemeja", description: "Kemeja PDL/PDH custom profesional untuk instansi dan organisasi." },
  { id: 6, name: "Sweater", description: "Sweater kasual dengan potongan rapi dan kenyamanan maksimal." },
  { id: 7, name: "Uniform", description: "Seragam kerja custom dengan desain ergonomis dan jahitan kuat." },
];

function Products() {
  return (
    <section id="products" className="bg-gray-100 py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-red-600">Produk Kami</p>
        <h2 className="mt-2 mb-4 text-3xl md:text-4xl font-bold text-black">Produk Custom Kami</h2>
        <p className="mx-auto max-w-2xl text-base md:text-lg text-gray-700">
          Kami menyediakan berbagai produk pakaian custom sesuai kebutuhan Anda, mulai dari kaos, hoodie, jaket, varsity, kemeja, sweater, hingga uniform.
          Setiap produk dibuat dengan kualitas terbaik dan desain yang unik.
        </p>

        <div className="mt-12">
          <ProductCard products={productsData} />
        </div>
      </div>
    </section>
  );
}

export default Products;
