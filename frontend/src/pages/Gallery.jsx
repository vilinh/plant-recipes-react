import React from 'react';
import '../styles/Gallery.css';
import veg from '../assets/veg.png';

export default function Gallery() {
    return (
        <div className='gallery'>
            <div className='text'>
                <h1>Basic Ingredients</h1>
                <p>The essential ingredients that make up
                a majority of the featured plant-based recipes.</p>
            </div>
            <img src={veg} alt='veg'/>
        </div>
    )
}
