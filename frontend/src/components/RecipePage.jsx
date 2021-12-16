import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/rPage.css';

export default function RecipePage({data}) {
    const { recipeName } = useParams();
    let targetRecipe = data.filter(x => x.name === recipeName)

    //form states & handlers
    const [ingredientList, setIngredientList] = useState(targetRecipe[0].ingredients);
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
        <div>
            {targetRecipe.map((recipe, index) => (
                <div key={index} className='rec max-width'>
                    <div className='recipe'>
                        <div className="recipeLeft">
                            <h1>{recipe.name}</h1>
                            <p id='time'>{recipe.time}</p>
                            <p className='description'>{recipe.desc}</p>
                        </div>
                        <div className="recipeRight">
                            <img src={recipe.image} alt={recipe.name}/>
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
                            {recipe.instructions.map((step) => {
                                return(<li key={step}>{step}</li>);
                            })}
                        </ol>
                    </div>
                </div>

                {/* add ingredients form */}
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
            
            ))}
        </div>
    )
}
