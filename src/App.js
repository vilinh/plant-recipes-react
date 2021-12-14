import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipesPage from './pages/RecipesPage';
import About from './pages/About';
import Footer from './components/Footer';
import HummusPasta from './pages/HummusPasta';
import GreenSmoothie from './pages/GreenSmoothie';
import VegNoodleSoup from './pages/VegNoodleSoup';
import VietNoodleSalad from './pages/VietNoodleSalad';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/HummusPasta" element={<HummusPasta />} />
          <Route path="/GreenSmoothie" element={<GreenSmoothie />} />
          <Route path="/VegNoodleSoup" element={<VegNoodleSoup />} />
          <Route path="/VietNoodleSalad" element={<VietNoodleSalad />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
