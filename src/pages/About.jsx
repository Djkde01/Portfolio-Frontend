import React from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';
import SkillsList from '../components/SkillsList';
import AboutHero from '../components/AboutHero';
import RoleCard from '../components/RoleCard';

import icon from '../assets/media/atomo.svg';

const About = () => {
    return (
        <div>
           <Header/>
           <AboutHero/>
           <SkillsList/>
           <RoleCard roleImage={icon} roleName="Front-end Developer" roleDescription="Short description about that technology and my projects"/>
           <Footer/>
        </div>
    )
}

export default About
