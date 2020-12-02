import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import Button from '../components/Button';

import '../styles/Projects.css';

const Projects = () => {
    return (
        <div>
            <Header/>
            <main className="main-projects">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </main>
                <h2>Let’s create something big!</h2>
                <div className="skills-list">
                    <Button text="Contact me" link="/" type="principal" color="primary"/>
                </div>
            <Footer/>
        </div>
    )
}

export default Projects
