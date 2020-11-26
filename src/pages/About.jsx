import React from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';
import SkillsList from '../components/SkillsList';
import AboutHero from '../components/AboutHero';

const About = () => {
    return (
        <div>
           <Header/>
           <AboutHero/>
           <SkillsList/>
           <Footer/>
        </div>
    )
}

export default About
