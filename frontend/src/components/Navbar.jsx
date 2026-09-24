import { useState } from "react";
import Logo from "../assets/Logo.png";

const navLinks = [
  { name: "Tentang Kami", href: "#about" },
  { name: "Produk", href: "#products" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Mengapa Kami", href: "#why-us" },
  { name: "Proses", href: "#process" },
  { name: "Kontak", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/90 px-6 py-4 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={Logo} alt="Konveksindo Logo" className="h-10 w-auto md:h-12" />
        </a>

        {/* Menu Navigasi Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-bold uppercase tracking-widest text-neutral-400 transition-colors duration-300 hover:text-red-500"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Tombol CTA Desktop */}
        <a
          href="#contact"
          className="hidden border border-red-600 bg-red-600 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-red-500 md:inline-block"
        >
          Hubungi Kami
        </a>

        {/* Tombol Hamburger Mobile */}
        <button onClick={toggleMenu} className="p-1 text-white focus:outline-none md:hidden" aria-label="Toggle Menu">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              /* Ikon 'X' saat menu terbuka */
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              /* Ikon Hamburger Tiga Garis */
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Navigasi Dropdown Mobile */}
      {isOpen && (
        <div className="mt-4 flex flex-col space-y-4 border-t border-neutral-800 pt-4 md:hidden">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-neutral-300 transition-colors hover:text-red-500"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-block border border-red-600 bg-red-600 px-6 py-2.5 text-center text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-transparent hover:text-red-500"
          >
            Hubungi Kami
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
