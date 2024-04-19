import "./sass/index.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Banner from "./components/banner/Banner";
import Product from "./components/product/Product";
import Stay from "./components/stay/Stay";
import Pricing from "./components/pricing/Pricing";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Banner />
      <Product />
      <Stay />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
