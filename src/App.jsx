import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Footer from './components/footer/Footer'
import Single from './pages/single/Single'
import Cart from './pages/cart/Cart'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Single />} />
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App
