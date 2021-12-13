import React from 'react';
import hp from '../assets/vietnoodlesalad.png';
import '../styles/rPage.css';

export default function VietNoodleSalad() {
    return (
        <div className='max-width'>
        <div className='recipe'>
            <div className="recipeLeft">
                <h1>Vietnamese Noodle Salad</h1>
                <p id='time'>30 MIN</p>
                <p className='description'>A refreshing bowl filled with noodles, lettuce, carrots, herbs
                 and mint with crispy baked tofu, dressed and tossed with 'fish' sauce. A delectable and 
                 healthy dish that tastes good and makes you feel good!
                </p>
            </div>
            <div className="recipeRight">
                <img src={hp} alt='viet noodle salad'/>
            </div>
        </div>
        </div>
    )
}
