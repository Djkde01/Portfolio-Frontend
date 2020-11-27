import React from 'react'

import Button from './Button'
import Skill from './Skill'

import '../styles/ProjectCard.css';

const ProjectCard = () => {
    return (
        <div className="projectcard">
            <span className="projectcard-image">
                <img/>
            </span>
            <div className="projectcard-description">
                <h3>Project Name</h3>
                <Button type="second" color="alternative" text="Area Worked"/>
                <Button type="second" color="alternative" text="Area Worked"/>
            </div>
            <div className="projectcard-skills">
                <Skill type="small" skillName="Name"/>
                <Skill type="small" skillName="Name"/>
                <Skill type="small" skillName="Name"/>
                <Skill type="small" skillName="Name"/>
                <Skill type="small" skillName="Name"/>
                <Skill type="small" skillName="Name"/>
            </div>
        </div>
    )
}

export default ProjectCard
