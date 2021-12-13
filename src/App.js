import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './pages/Gallery';
import RecipesPage from './pages/RecipesPage';
import About from './pages/About';
import Footer from './components/Footer';
import HummusPasta from './pages/HummusPasta';
import GreenSmoothie from './pages/GreenSmoothie';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/HummusPasta" element={<HummusPasta />} />
          <Route path="/GreenSmoothie" element={<GreenSmoothie />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
