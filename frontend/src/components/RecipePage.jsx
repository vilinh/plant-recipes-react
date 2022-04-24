import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/rPage.css';

export default function RecipePage() {
    const { recipeName } = useParams();
    const [targetRec, setTargetRec] = useState({});
  
    //form states & handlers
    const [ingredientList, setIngredientList] = useState([]);
    const [instructions, setInstructions] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const loadRecipes = async () => {
          let rec = await (await fetch('http://localhost:3001/api/recipe/' + recipeName)).json();
          console.log(rec);
          setTargetRec(rec);
          setIngredientList(rec.ingredients);
          setInstructions(rec.instructions);
        }
        loadRecipes();
      }, [])
    
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
            {targetRec && (
                <div className='rec max-width'>
                    <div className='recipe'>
                        <div className="recipeLeft">
                            <h1>{targetRec.name}</h1>
                            <p id='time'>{targetRec.time}</p>
                            <p className='description'>{targetRec.desc}</p>
                        </div>
                        <div className="recipeRight">
                            <img src={targetRec.image} alt={targetRec.name}/>
                        </div>
                    </div>

                    <div className="recipe-panel">
                        <div className="ingredients">
                            <h3>Ingredients</h3>
                            <ul>
                                {ingredientList && ingredientList.map((x) => {
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
            
            )}
        </div>
    )
}
