const processSteps = [
  {
    step: "01",
    title: "Konsultasi",
    description: "Diskusi kebutuhan pakaian custom, jenis bahan, dan konsep awal bersama tim kami.",
  },
  {
    step: "02",
    title: "Produk & Desain",
    description: "Penyesuaian mock-up desain, pilihan warna, dan detail penempatan logo/sablon/bordir.",
  },
  {
    step: "03",
    title: "Jumlah & Harga",
    description: "Kesepakatan rincian kuantitas pesanan, estimasi waktu, dan penawaran harga terbaik.",
  },
  {
    step: "04",
    title: "Proses Produksi",
    description: "Pesanan masuk ke tahap produksi setelah approval desain dan pembayaran DP 25%.",
  },
  {
    step: "05",
    title: "Pengiriman",
    description: "Pemeriksaan kualitas (QC), pelunasan, lalu barang siap dikirim atau diambil.",
  },
];

function ProductionProcess() {
  return (
    <section id="process" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Eyebrow Label */}
        <p className="text-sm font-semibold uppercase tracking-widest text-red-600">Proses Produksi</p>

        {/* Heading */}
        <h2 className="mt-2 text-3xl font-bold text-black md:text-4xl">Bagaimana Kami Bekerja</h2>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-700 md:text-lg">
          Ikuti tahapan pemesanan pakaian custom mulai dari konsultasi hingga pengiriman.
        </p>

        {/* Steps Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="group relative flex flex-col justify-between rounded-xl border border-gray-100 bg-gray-50 p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-md"
            >
              <div>
                {/* Badge Nomor Langkah */}
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-lg font-bold text-red-600 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                  {item.step}
                </div>

                <h3 className="text-lg font-bold text-black transition-colors group-hover:text-red-600">{item.title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductionProcess;
