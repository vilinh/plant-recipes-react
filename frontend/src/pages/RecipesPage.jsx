import React from 'react'
import RecipeItem from '../components/RecipeItem';
import '../styles/RecipesPage.css';
import { Link } from 'react-router-dom';

export default function RecipesPage({recipes}) {
    return (
        <div className="recipesPage">
            <div className="max-width">
                <div className="header">
                    <h1>Recipes</h1>
                </div>
            <div className="recipeList">
                {recipes.map((recipeItem, key) => {
                    return (
                        <Link to={recipeItem.link}><RecipeItem 
                            key="{key}"
                            image={recipeItem.image}
                            name={recipeItem.name}
                            time={recipeItem.time}
                        /></Link>
                    );
                })}
            </div>
            </div>
        </div>
    )
}
