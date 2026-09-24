import kaosImage from "../assets/Portfolio/A1.jpeg";
import videoImage from "../assets/Videos/V1.mp4";
import image1 from "../assets/Portfolio/B1.jpeg";
import image2 from "../assets/Portfolio/D1.jpeg";
import image3 from "../assets/Portfolio/P1.jpeg";

const portfolioItems = [
  { id: 1, type: "image", src: kaosImage, title: "Kaos Custom", alt: "Hasil produksi kaos custom KONVEKSINDO" },
  { id: 2, type: "video", src: videoImage, title: "Dokumentasi Produk", alt: "Video produk KONVEKSINDO" },
  { id: 3, type: "image", src: image1, title: "Custom Design", alt: "Hasil produksi custom KONVEKSINDO" },
  { id: 4, type: "image", src: image2, title: "Sablon & Detail", alt: "Hasil produksi custom KONVEKSINDO" },
  { id: 5, type: "image", src: image3, title: "Workwear", alt: "Hasil produksi custom KONVEKSINDO" },
];

function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-100 py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Eyebrow / Label */}
        <p className="text-sm font-semibold uppercase tracking-widest text-red-600">Portfolio</p>

        {/* Heading Utama */}
        <h2 className="mt-2 text-3xl font-bold text-black md:text-4xl">Hasil Produksi Kami</h2>

        {/* Deskripsi */}
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-700 md:text-lg">
          Lihat beberapa hasil produksi pakaian custom dan aktivitas pengerjaan dari KONVEKSINDO.PH.
        </p>

        {/* Grid Media Galeri */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {item.type === "video" ? (
                <video src={item.src} controls preload="metadata" className="h-64 w-full object-cover" />
              ) : (
                <div className="h-64 w-full overflow-hidden">
                  <img src={item.src} alt={item.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-4 text-left">
                <span className="text-sm font-medium text-white">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
