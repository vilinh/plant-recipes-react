import React from 'react';
import hp from '../assets/vns.png';
import '../styles/rPage.css';

export default function VegNoodleSoup() {
    return (
        <div className='max-width'>
        <div className='recipe'>
            <div className="recipeLeft">
                <h1>Veg Noodle Soup</h1>
                <p id='time'>20 MIN</p>
                <p className='description'>A quick nourishing meal to get your veggies,
                 vitamins, and fiber in. Perfect for a rainy day or any day that you just 
                 need a warm hug.
                </p>
            </div>
            <div className="recipeRight">
                <img src={hp} alt='veg noodle soup'/>
            </div>
        </div>
        </div>
    )
}
