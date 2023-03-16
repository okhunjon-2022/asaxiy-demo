import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./routers/home/Home"
import Payment from "./routers/payment/Payment"
import Traker from "./routers/traker/Traker"
import Cart from "./routers/cart/Cart"
import WishLike from "./routers/wishLike/WishLike"
import Kabinet from "./routers/kabinet/Kabinet"
import UniquePage from "./routers/uniquePage/UniquePage"
import Footer from './components/footer/Footer';
import Login from './routers/login/Login';
import { useSelector } from "react-redux"

function App() {
  const user = useSelector(s => s.user)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/traker' element={<Traker />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishLike' element={<WishLike />} />
        <Route path='/uniquePage/:proID' element={<UniquePage />} />

        {
          user ?
            <Route path='/login' element={<Navigate replace to="/admin" />} />
            :
            <Route path='/admin/*' element={<Navigate replace to="/login" />} />
        }
        <Route path='/login' element={<Login />} />
        <Route path='/admin/*' element={<Kabinet />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
