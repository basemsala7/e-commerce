import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./commponents/Header";
import About from "./commponents/About";
import Contact from "./commponents/Contact";
import Home from "./commponents/Home";
import Footer from "./commponents/Footer";
import Details from "./commponents/Details";
import ShoseProduct from "./commponents/ShoseProduct";
import CartList from "./commponents/CartList";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartList" element={<CartList />} />
        <Route path="/shose" element={<ShoseProduct />} />
        <Route path="shose/:ID" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
