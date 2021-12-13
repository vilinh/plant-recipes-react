import React from 'react';
import hp from '../assets/greensmoothie.png';
import '../styles/rPage.css';

export default function GreenSmoothie() {
    return (
        <div className='max-width'>
        <div className='recipe'>
            <div className="recipeLeft">
                <h1>Green Smoothie</h1>
                <p id='time'>7 MIN</p>
                <p className='description'>A bright smoothie filled with greens, 
                fiber, protein, and fat. A perfect on-the-go meal for breakfast, 
                lunch, snack, or even dinner!
                </p>
            </div>
            <div className="recipeRight">
                <img src={hp} alt='green smoothie'/>
            </div>
        </div>
        </div>
    )
}
