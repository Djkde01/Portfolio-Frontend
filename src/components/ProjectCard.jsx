import React from 'react'

import '../styles/ProjectCard.css';
import ProjectRoles from './ProjectRoles';
import ProjectSkills from './ProjectSkills';

const ProjectCard = ({projectName,projectImage,projectRoles,projectSkills}) => {
    return (
        <div className="projectcard">
            <span className="projectcard-image">
                <img src={projectImage} alt="Project overview"/>
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
