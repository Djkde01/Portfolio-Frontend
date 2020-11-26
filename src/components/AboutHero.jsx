import React from 'react'

import picture from '../assets/media/PhotoNoLogoRounded.png'

import '../styles/AboutHero.css';

const AboutHero = () => {
    return (
        <div className="hero">
            <span>
                <img className="hero-image" src={picture} alt="profile avatar"/>
            </span>
            <div className="hero-info">
                <h4>Passionate Frontend Developer & UI/UX Enthusiast</h4>
                <h6>
                Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.
                </h6>
                <h2 className="hero-info-phrase">"Who knows a lot and does not teach, knows nothing"</h2>

            </div>
        </div>
    )
}

export default AboutHero
