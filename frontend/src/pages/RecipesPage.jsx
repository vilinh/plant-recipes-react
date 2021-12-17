import React, { useEffect } from 'react'
import RecipeItem from '../components/RecipeItem';
import '../styles/RecipesPage.css';
import { Link } from 'react-router-dom';

export default function RecipesPage({recipes}) {

    return (
        <div className="recipesPage max-width">
                <div className="header">
                    <h1>Recipes</h1>
                </div>
            <div className="recipeList">
                {recipes.map((recipeItem, index) => {
                    return (
                        <Link key={index} to={`/tests/${recipeItem.name}`}><RecipeItem 
                            image={recipeItem.image}
                            name={recipeItem.name}
                            time={recipeItem.time}
                        /></Link>
                    );
                })}
            </div>
        </div>
    )
}
