import Checkout from './Checkout';//同一層
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';//同一層
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Link to = "/">MainPage</Link>
      <Link to = "/product_list">ProductList</Link>     
      <Link to = "/checkout">Checkout</Link>     
      <Link to = "/product_detail">ProductDetail</Link>


        <Routes>
             <Route path = "product_list" element = {<ProductList/>} />
             <Route path = "checkout" element = {<Checkout/>} />
             <Route path = "product_detail" element = {<ProductDetail/>} />
             <Route path = "*" element = {<p>找不到網頁</p>} />

        </Routes>  
    </BrowserRouter>
  )
}

export default App;
