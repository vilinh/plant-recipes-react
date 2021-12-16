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
import React, { useState, useEffect } from 'react';
import RecipeItem from './components/RecipeItem';

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
          {RecipeList.map((recipe) => {
            return(
                <Route key={recipe.name} path={recipe.link} element={<RecipePage
                  name={recipe.name}
                  image={recipe.image}
                  time={recipe.time}
                  desc={recipe.desc}
                  ingredients={recipe.ingredients}
                  instructions={recipe.instructions}
                  data={recipe}
                />}/>
            );
          })}
          {/* <Route path="/recipe/name" element={<RecipePage
            data={recipe ? recipe : null} */}
          <Route path="/recipes/:title" element={<RecipeItem data={RecipeList}/>} />  
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
