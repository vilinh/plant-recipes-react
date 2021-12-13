import React from 'react';
import hp from '../assets/hummuspasta.png';
import '../styles/rPage.css';

export default function HummusPasta() {
    return (
        <div className='rec max-width'>
        <div className='recipe'>
            <div className="recipeLeft">
                <h1>Hummus Pasta</h1>
                <p id='time'>20 MIN</p>
                <p className='description'>A simple and tasty meal 
                    perfect for college students or people on the go. 
                    Only takes under 30 minutes to prepare and can be made into leftovers - 
                    just as good or even better the day after!
                </p>
            </div>
            <div className="recipeRight">
                <img src={hp} alt='hummus pasta'/>
            </div>
        </div>
        </div>
    )
}
