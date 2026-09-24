function About() {
  const highlights = [
    {
      title: "Harga Terjangkau",
      desc: "Pilihan produksi yang dapat disesuaikan dengan kebutuhan dan jumlah pesanan.",
    },
    {
      title: "Custom Sesuai Kebutuhan",
      desc: "Bebas menyesuaikan desain, model, warna, sablon, dan bordir sesuai kebutuhan.",
    },
    {
      title: "Pilihan Produk",
      desc: "Menyediakan berbagai pilihan pakaian custom untuk individu, komunitas, sekolah, perusahaan, dan kebutuhan lainnya.",
    },
  ];
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-red-600">Tentang Kami</p>
        <h2 className="mt-2 text-3xl font-bold text-black md:text-4xl">Solusi Produksi Pakaian Custom</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-700 md:text-lg">
          <span className="font-semibold text-black">KONVEKSINDO.PH</span> adalah vendor produksi pakaian custom yang berfokus pada kualitas dan kepuasan
          pelanggan. Kami menyediakan layanan lengkap mulai dari konsultasi desain hingga pengiriman.
        </p>

        {/* Highlight Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <div key={index} className="rounded-xl border border-gray-200 bg-white p-6 text-left shadow-sm transition-all hover:shadow-md">
              <h3 className="mb-2 text-xl font-bold text-black">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
