import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipesPage from './pages/RecipesPage';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import { RecipeList } from './data/RecipeList.js';
import React, { useState, useEffect } from 'react';
import RecipePage from './components/RecipePage';

function App() {
  let [recipe, setRecipe] = useState();

  useEffect(() => {
    const loadRecipes = () => {
      fetch('http://localhost:3001/api/recipe/')
      .then(res => res.json())
      .then(jsondata => setRecipe(jsondata))
    }
    loadRecipes();
  }, [])


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipesPage recipes={RecipeList}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tests/:recipeName" element={<RecipePage data={RecipeList}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
