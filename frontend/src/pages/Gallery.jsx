import React from 'react';
import '../styles/Gallery.css';

export default function Gallery({data}) {
    // array of images
    var images = []
    var desc = []
    data.map((recipe) => {
        images.push(recipe.image)
        desc.push(recipe.desc)
    })
    var slider = document.getElementById("slider");
    var p = document.getElementById("desc");
    var num = 0;

    function prev() {
        num--;
        if(num < 0) {
            num = images.length-1;
        }
        slider.src = images[num]
        p.innerHTML = desc[num]
        console.log(num)
    }
    function next() {
        num++;
        if (num > images.length-1) {
            num = 0;
        }
        slider.src = images[num]
        p.innerHTML = desc[num]
        console.log(num)
    }

    return (
        <div className='gallery'>
            <div className="gallery-panel">
                <div className="text">
                    <h1>On the Blog</h1>
                    <p id="desc">Preview of featured recipes available</p>
                </div>
                <div className="images">
                    <i class="fas fa-chevron-left sliders"
                    onClick={prev}></i>
                    <img id="slider" src="https://i.imgur.com/QOqeA0M.png"/>
                    <i className="fas fa-chevron-right sliders"
                    onClick={next}></i>
                </div>
            </div>
        </div>
    )
}
