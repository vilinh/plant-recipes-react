import React from 'react';

export default function AboutComponent({title, image, desc}) {
    return (
        <div>
             <div className="about-item">
                <img className="about-image" src={image} alt="value images"></img>
                    <div className="about-text">
                        <h2>{title}</h2>
                        <br/>
                        <p>{desc}</p>
                    </div>
            </div>
        </div>
    )
}
