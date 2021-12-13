import React from 'react'
import RecipeItem from '../components/RecipeItem';
import '../styles/RecipesPage.css';
import { RecipeList } from '../data/RecipeList';
import { Link } from 'react-router-dom';

export default function RecipesPage() {
    return (
        <div className="recipesPage">
            <div className="max-width">
                <div className="header">
                    <h1>Recipes</h1>
                    <p>A collection of plant based recipes you can use
                    to fuel a healthy life style.</p>
                    <p>Get started on a healthy lifestyle one recipe at a time.</p>
                </div>
            <div className="recipeList">
                {RecipeList.map((recipeItem, key) => {
                    return (
                        <Link to ="/hummuspasta"><RecipeItem 
                            key={key}
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
