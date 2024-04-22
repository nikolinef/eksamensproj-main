
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Homepage'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Sidehoved from './components/Sidehoved'
import Footer from './components/Footer'
import Memberpage from './pages/Memberpage'

function App() {

  return (
    <>
      <Sidehoved />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/memberpage" element={<Memberpage/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App
