import React from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';
import Skill from '../components/Skill';

import icon from '../assets/media/LogoVectorWhite.svg';

const About = () => {
    return (
        <div>
           <Header/>
           <Skill skillIcon={icon} skillName="React.js"/>
           <Footer/>
        </div>
    )
}

export default About
