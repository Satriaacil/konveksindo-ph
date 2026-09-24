function Hero() {
  return (
    <section
      className="
        relative
        flex
        min-h-[85vh]
        items-center
        justify-center
        bg-neutral-950
        px-6
        overflow-hidden
      "
    >
      {/* Efek tekstur debu/noise untuk memecah kesan kaku/template AI */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          pointer-events-none
          z-0
        "
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")',
        }}
      ></div>

      <div
        className="
          relative
          z-10
          max-w-4xl
          text-center
        "
      >
        <p
          className="
            mb-6
            font-semibold
            uppercase
            tracking-[0.3em]
            text-red-600
          "
        >
          Konveksindo Production House
        </p>

        <h1
          className="
            text-4xl
            font-extrabold
            tracking-tight
            text-white
            sm:text-5xl
            md:text-7xl
          "
        >
          Custom Clothing
          <span
            className="
              block
              mt-2
              text-neutral-400
            "
          >
            Production
          </span>
        </h1>

        <p
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            leading-relaxed
            text-neutral-400
          "
        >
          Solusi produksi pakaian custom sesuai kebutuhan Anda. Vendor bidang konveksi dengan garansi termurah se-Tangerang Raya.
        </p>

        <div
          className="
            mt-12
            flex
            justify-center
          "
        >
          <a
            href="#contact"
            className="
              inline-block
              bg-red-600
              px-8
              py-4
              text-sm
              font-bold
              uppercase
              tracking-widest
              text-white
              transition-all
              duration-300
              hover:bg-red-700
              hover:-translate-y-1
            "
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
