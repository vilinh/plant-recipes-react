import React from 'react'
import '../styles/About.css';
import { paragraphs } from '../data/AboutData';
import AboutComponent from '../components/AboutComponent';
import vegg from '../assets/vegg.png';

export default function About() {
    return (
        <div className='about'>
            <div className="header" 
                style={{ backgroundImage: `url(${vegg})` }}>
                <h1>About</h1>
            </div> 
                <div className="about-items">
                    {paragraphs.map((item, index) => {
                        return (
                            <AboutComponent 
                                key={index}
                                image={item.img}
                                title={item.heading}
                                desc={item.description}
                            />
                        )
                    })}
                </div>
        </div>
    )
}
