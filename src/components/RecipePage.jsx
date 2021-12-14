import React from 'react';
import '../styles/rPage.css';

export default function RecipePage({name, image, time, desc}) {
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
        </div>
    )
}
