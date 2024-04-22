
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Sidehoved from './components/Sidehoved';
import Footer from './components/Footer';
import Memberpage from './pages/Memberpage';
import LogIn from './pages/LogIn';
import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './Firebaseswd';

function App() {
// Sætter en eventlistener for at registrerer, når brugeren lukker
    // browseren/fanebladet. Hvis det sker, logges brugeren ud. 
    //en useeffect koppiret fra Mortens kode i undervisning d. 11.-15. marts 
useEffect(() => {
  async function handleTabClose() {
    await signOut(auth);
  }
  window.addEventListener('beforeunload', handleTabClose);

  return () => {
    window.removeEventListener('beforeunload', handleTabClose);
  };
}, []);

  return (
    <>
          <Sidehoved />
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/memberpage" element={<Memberpage/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
          <Footer/>
    </>
  )
}

export default App
