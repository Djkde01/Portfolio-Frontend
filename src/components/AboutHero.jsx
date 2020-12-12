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
                <p>
                Good to see you! My name is Sergio Estrella, also known into the internet as Djkde<br/><br/>
                I'm a Frontend Developer trained in HTML CSS, JS and React. Passionate about sharing everything I am learning. Interested in UI design and audiovisual production.<br/><br/>
                Also, I'm a student at Platzi, belonging to the Platzi Master Program, a program for the top 0.1% of students.             
                </p>
                <h2 className="hero-info-phrase">"Who knows a lot and does not teach, knows nothing"</h2>

            </div>
        </div>
    )
}

export default AboutHero
