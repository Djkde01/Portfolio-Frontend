import React from 'react'

import Button from './Button'

import '../styles/ProjectCard.css';
import ProjectRoles from './ProjectRoles';
import ProjectSkills from './ProjectSkills';

const ProjectCard = ({projectName,projectRoles,projectSkills}) => {
    return (
        <div className="projectcard">
            <span className="projectcard-image">
                <img alt="Project overview"/>
            </span>
            <div className="projectcard-description">
                <h3>{projectName}</h3>
                <ProjectRoles roles={projectRoles}/>
            </div>
            <ProjectSkills skillID={projectSkills}/>
        </div>
    )
}

export default ProjectCard
