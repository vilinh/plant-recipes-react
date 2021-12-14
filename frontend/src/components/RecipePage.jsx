import React, { useState } from 'react';
import '../styles/rPage.css';

export default function RecipePage({name, image, time, desc, ingredients, instructions}) {
    const [ingredientList, setIngredientList] = useState(ingredients);
    const [input, setInput] = useState('');
    
    const inputTextHandler = (e) => {
        setInput(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        setIngredientList([...ingredientList, input]);
        setInput("");
    };

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
                    {ingredientList.map((x) => {
                        return(<li key={x}>{x}</li>);
                    })}
                </ul>
            </div>
            <div className="instructions">
                <h3>Instructions</h3>
                <ol>
                    {instructions.map((step) => {
                        return(<li key={step}>{step}</li>);
                    })}
                </ol>
            </div>
            </div>

            <div className="add-ingredient">
                <form className="ingredient-form" onSubmit={submitHandler}>
                <input 
                    className="ingredient-input"
                    id = "ingred" 
                    type="text"
                    placeholder="Customize by adding your own ingredients!"
                    value={input}
                    onChange={inputTextHandler}
                    />
                <button type="submit" className="submit-button">add</button>
                </form>
            </div>
        </div>
    )
}
