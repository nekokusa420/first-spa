import Checkout from './Checkout';//同一層
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';//同一層
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <center>
        <Link to="/" className="link-spacing">MainPage</Link>
        <Link to="/checkout" className="link-spacing">Checkout</Link>
    </center>

        <Routes>
             <Route path = "/" element = {<ProductList/>} />
             <Route path = "/checkout" element = {<Checkout/>} />

              <Route path="/product" element={<ProductDetail />} >
                <Route path = ":id" element = {<ProductDetail/>} />
              </Route>

              <Route path="*" element={<p>找不到網頁</p>} />

        </Routes>  
    </BrowserRouter>
  )
}

export default App;
