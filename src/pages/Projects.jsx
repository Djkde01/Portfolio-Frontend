import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import Button from '../components/Button';

import '../styles/Projects.css';

import data from '../data.js'
const projectsList=data.projects;

const Projects = () => {
    return (
        <div>
            <Header/>
            <main className="main-projects">
            {
                projectsList.map((project)=>(
                    <ProjectCard key={project._id} projectName={project.name} projectRoles={project.roles} projectSkills={project.skillIds}/>
                ))
            }
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
