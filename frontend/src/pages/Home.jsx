import React from 'react';
import '../styles/Home.css';
import food from '../assets/veganbowl.png';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='home'>
            <div className="max-width">
                <div className='header'>
                    <div className='header-left'>
                        <h1>Simple Cooking Using Plant Based Foods</h1>
                        <p>Learn how to incorporate more whole foods and vegetables
                        into your diet through simple recipes.</p>
                        <div className='buttons'>
                            <Link to="/recipes"><div className='b1'>Explore Recipes</div></Link>
                            <Link to="/about"><div className='b2'>About</div></Link>
                        </div>                
                    </div>
                    <div className="header-right">
                        <img src={food} alt='food'/>
                    </div>
                </div>
            </div>
            {/* <Gallery /> */}
        </div>
    )
}
