import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ProductionProcess from "./components/ProductionProcess";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Portfolio />
      <ProductionProcess />
      <WhyChooseUs />
      <Contact />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
