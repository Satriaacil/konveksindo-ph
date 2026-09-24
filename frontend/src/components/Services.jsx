function Services() {
  const services = [
    {
      title: "Custom Clothing",
      description:
        "Layanan produksi pakaian custom sesuai kebutuhan, mulai dari model hingga pilihan produk.",
    },
    {
      title: "Custom Design",
      description:
        "Desain pakaian dapat disesuaikan dengan kebutuhan dan identitas Anda.",
    },
    {
      title: "Sablon",
      description:
        "Layanan sablon untuk berbagai kebutuhan pakaian custom.",
    },
    {
      title: "Bordir",
      description:
        "Layanan bordir untuk logo, nama, dan desain pada pakaian.",
    },
  ];

  return (
    <section id="services" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
          Layanan Kami
        </p>

        <h2 className="mt-2 text-3xl font-bold text-black md:text-4xl">
          Layanan Produksi
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-700 md:text-lg">
          Kami menyediakan berbagai layanan untuk membantu memenuhi kebutuhan
          pakaian custom Anda.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-black">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;