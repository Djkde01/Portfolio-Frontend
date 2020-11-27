import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'

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
            <Footer/>
        </div>
    )
}

export default Projects
