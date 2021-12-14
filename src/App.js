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
import { RecipeList } from './data/RecipeList.js';
import RecipePage from './components/RecipePage';

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
          {RecipeList.map((recipe) => {
            return(
                <Route path={recipe.link} element={<RecipePage 
                  name={recipe.name}
                  image={recipe.image}
                  time={recipe.time}
                  desc={recipe.desc}
                />}/>
            );
          })}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
