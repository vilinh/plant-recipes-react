import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipesPage from './pages/RecipesPage';
import About from './pages/About';
import Footer from './components/Footer';
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
                  key={recipe} 
                  name={recipe.name}
                  image={recipe.image}
                  time={recipe.time}
                  desc={recipe.desc}
                  ingredients={recipe.ingredients}
                  instructions={recipe.instructions}
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
