import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles.css'
import Cart from './components/Cart'
import Home from './components/Home'
import Products from './components/Products'
import { useCart } from 'react-use-cart';
import { BsFillCartCheckFill } from "react-icons/bs";


function App() {

const {totalItems} = useCart();

  return (
<Router>
    <div className="App">
        <div className="nav-container">
            <Link to="/">Home</Link>
            {" "}
            <Link to="/Products">Products</Link>
            {" "}
            <Link to="/Cart"><BsFillCartCheckFill/>{(totalItems === 0 ? null : (totalItems))}</Link>
        </div>

    <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/Cart" element={<Cart/>} />

    </Routes>

    </div>
</Router>
  );
}

export default App;
