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
           <AboutHero/>
           <h2>My Skills</h2>
           <SkillsList/>
           <h2>I can help you with</h2>
           <RolesList/>
           <div className="skills-list">
               <Button text="See my projects" link="/about" type="principal" color="primary"/>
               <Button text="Contact me" link="/about" type="principal" color="primary"/>
           </div>
           <Footer/>
        </div>
    )
}

export default About
