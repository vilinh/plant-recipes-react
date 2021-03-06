import React from 'react';

export default function RecipeItem({name, time, image}) {
    return (
        <div className="rItem">
            <img src={image} alt={name}></img>
            <h2>{name}</h2>
            <p>{time}</p>
        </div>
    )
}
