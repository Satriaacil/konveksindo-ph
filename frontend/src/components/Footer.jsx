const quickLinks = [
  { name: "Tentang Kami", href: "#about" },
  { name: "Produk", href: "#products" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Mengapa Kami", href: "#why-us" },
  { name: "Proses Produksi", href: "#process" },
  { name: "Kontak", href: "#contact" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Grid 3 Kolom */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Kolom 1: Branding & Deskripsi Singkat */}
          <div>
            <h2 className="text-2xl font-bold tracking-wider text-white">
              KONVEKSINDO<span className="text-red-600">.PH</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Vendor produksi pakaian custom dengan berbagai pilihan produk dan layanan, mulai dari desain, sablon, hingga bordir.
            </p>
          </div>

          {/* Kolom 2: Navigasi Cepat (Sitemap) */}
          <div>
            <h3 className="text-lg font-semibold text-white">Navigasi</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="transition-colors hover:text-red-500">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Info Ringkas Kontak */}
          <div>
            <h3 className="text-lg font-semibold text-white">Kontak</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li>
                <span className="font-medium text-gray-300">WhatsApp: </span>
                <a href="https://wa.me/6289681890000" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-red-500">
                  089681890000
                </a>
              </li>
              <li>
                <span className="font-medium text-gray-300">Email: </span>
                <a href="mailto:konveksindo.ph@gmail.com" className="transition-colors hover:text-red-500">
                  konveksindo.ph@gmail.com
                </a>
              </li>
              <li>
                <span className="font-medium text-gray-300">Lokasi: </span>
                <a
                  href="https://maps.app.goo.gl/15nEMtSRNiwYLd8K7?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-red-500"
                >
                  Cibodas, Kota Tangerang
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Hak Cipta */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>© {currentYear} KONVEKSINDO.PH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
