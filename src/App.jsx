import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App
