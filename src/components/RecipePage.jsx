import React from 'react';
import '../styles/rPage.css';

export default function RecipePage({name, image, time, desc, ingredients, instructions}) {
    return (
        <div className='rec max-width'>
            <div className='recipe'>
                <div className="recipeLeft">
                    <h1>{name}</h1>
                    <p id='time'>{time}</p>
                    <p className='description'>{desc}</p>
                </div>
                <div className="recipeRight">
                    <img src={image} alt={name}/>
                </div>
            </div>
            <div className="recipe-panel">
            <div className="ingredients">
                <h3>Ingredients</h3>
                <ul>
                    {ingredients.map((ingred) => {
                        return(<li>{ingred}</li>);
                    })}
                </ul>
            </div>
            <div className="instructions">
                <h3>Instructions</h3>
                <ol>
                    {instructions.map((step) => {
                        return(<li>{step}</li>);
                    })}
                </ol>
            </div>
            </div>
        </div>
    )
}
