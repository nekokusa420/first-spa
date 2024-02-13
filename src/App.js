import Checkout from "./Checkout"; //同一層
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList"; //同一層
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <Link to="/" className="link-spacing">
          MainPage
        </Link>
        <Link to="/checkout" className="link-spacing">
          Checkout
        </Link>

        <Routes>
          <Route path="/" element={<ProductList />} />

          <Route path="checkout" element={<Checkout />} />

          <Route path="/product" element={<ProductDetail />}>
            <Route path=":id" element={<ProductDetail />} />
          </Route>
        </Routes>

        <center>
          <Link to="/" className="link-spacing">
            返回主頁
          </Link>
        </center>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
