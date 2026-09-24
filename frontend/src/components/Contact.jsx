const contactItems = [
  {
    id: 1,
    title: "WhatsApp",
    value: "089681890000",
    href: "https://wa.me/6289681890000",
    target: "_blank",
    actionText: "Kirim Pesan",
    icon: (
      <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Email",
    value: "konveksindo.ph@gmail.com",
    href: "mailto:konveksindo.ph@gmail.com",
    target: "_self",
    actionText: "Kirim Email",
    icon: (
      <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Lokasi Workshop",
    value: "Cibodas, Kota Tangerang, Banten",
    href: "https://maps.app.goo.gl/15nEMtSRNiwYLd8K7?g_st=iw",
    target: "_blank",
    actionText: "Buka Google Maps",
    icon: (
      <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 00-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

function Contact() {
  return (
    <section id="contact" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Eyebrow Label */}
        <p className="text-sm font-semibold uppercase tracking-widest text-red-600">Contact</p>

        {/* Heading */}
        <h2 className="mt-2 text-3xl font-bold text-black md:text-4xl">Hubungi Kami</h2>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-700 md:text-lg">
          Konsultasikan kebutuhan pakaian custom Anda bersama KONVEKSINDO.PH. Hubungi kami untuk membahas produk, desain, jumlah pesanan, dan harga.
        </p>

        {/* Contact Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {contactItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target={item.target}
              rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
              className="group flex flex-col justify-between rounded-xl border border-gray-100 bg-gray-50 p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-md"
            >
              <div>
                {/* Icon Container */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 transition-colors duration-300 group-hover:bg-red-600">
                  <span className="transition-all group-hover:brightness-0 group-hover:invert">{item.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-black transition-colors group-hover:text-red-600">{item.title}</h3>

                <p className="mt-2 text-base font-medium text-gray-700">{item.value}</p>
              </div>

              {/* Action Link Indicator */}
              <div className="mt-6 flex items-center text-sm font-semibold text-red-600 transition-all group-hover:translate-x-1">
                <span>{item.actionText}</span>
                <span className="ml-1">&rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
