import React, { useState } from 'react';
import '../styles/Gallery.css';

export default function Gallery({data}) {
    // array of images & current index
    const [index, setIndex] = useState(0);
    const length = data.length;
    var images = []
    var desc = []
    data.map((recipe) => {
        images.push(recipe.image)
        desc.push(recipe.desc)
    })

    const next = () => {
        setIndex(index === length - 1 ? 0 : index + 1);
        console.log(index)
    }
    const prev = () => {
        setIndex(index === 0 ? length - 1 : index - 1);
        console.log(index)
    }

    return (
        <div className='gallery'>
            <div className="gallery-panel">
                <div className="text">
                    <h1>On the Blog</h1>
                    <p id="desc">{desc[index]}</p>
                </div>
                <div className="images">
                    <i className="fas fa-chevron-left sliders"
                    onClick={prev}></i>
                    <img id="slider" src={images[index]}/>
                    <i className="fas fa-chevron-right sliders"
                    onClick={next}></i>
                </div>
            </div>
        </div>
    )
}
