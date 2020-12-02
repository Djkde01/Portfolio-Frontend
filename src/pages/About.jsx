import React from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';
import SkillsList from '../components/SkillsList';
import AboutHero from '../components/AboutHero';
import RolesList from '../components/RolesList';
import Button from '../components/Button';

import '../styles/About.css';

const About = () => {
    return (
        <div>
           <Header/>
           <main>
            <AboutHero/>
            <h2>I can help you with</h2>
            <RolesList/>
            <h2>My Skills</h2>
            <SkillsList/>
            <h2>We make your project come true together?</h2>
            <div className="skills-list">
                <Button text="See my projects" link="/projects" type="principal" color="primary"/>
                <Button text="Contact me" link="/" type="principal" color="primary"/>
            </div>
           </main>
           <Footer/>
        </div>
    )
}

export default About
