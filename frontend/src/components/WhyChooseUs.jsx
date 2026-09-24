const features = [
  {
    id: 1,
    title: "Harga Terjangkau",
    description: "Pilihan fleksibel yang menyesuaikan dengan anggaran dan skala jumlah pesanan Anda.",
    icon: (
      <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Kualitas Jahitan",
    description: "Memperhatikan kualitas jahitan dalam proses produksi pakaian custom.",
    icon: (
      <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Custom Design",
    description: "Kebebasan kustomisasi model, pilihan bahan, warna, sablon, hingga detail bordir.",
    icon: (
      <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Produksi Jumlah Besar",
    description: "Melayani kebutuhan produksi dalam jumlah besar sesuai kebutuhan pesanan.",
    icon: (
      <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h5m-5 0V12m0 0h5m-5 0H7"
        />
      </svg>
    ),
  },
];

function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-gray-100 py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Eyebrow Label */}
        <p className="text-sm font-semibold uppercase tracking-widest text-red-600">Mengapa Kami</p>

        {/* Heading */}
        <h2 className="mt-2 text-3xl font-bold text-black md:text-4xl">Kenapa Memilih KONVEKSINDO.PH?</h2>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-700 md:text-lg">
          Kami menyediakan berbagai pilihan produk dan layanan untuk membantu memenuhi kebutuhan pakaian custom Anda.
        </p>

        {/* Feature Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.id}
              className="group rounded-xl border border-gray-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-md"
            >
              {/* Icon Container */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <span className="group-hover:brightness-0 group-hover:invert transition-all">{item.icon}</span>
              </div>

              <h3 className="text-xl font-bold text-black group-hover:text-red-600 transition-colors">{item.title}</h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
