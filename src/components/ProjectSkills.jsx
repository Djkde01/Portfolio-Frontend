import React from 'react'

import Skill from './Skill'
import data from '../data.js';
const skillsList=data.skills;

const ProjectSkills = ({skillID}) => {
    return (
        <div className="projectcard-skills">
        {
            skillID.map((id,index)=>(
                    <Skill key={index} type="small" skillName={skillsList[id].name} skillIcon={skillsList[id].image}/>    
                ))
        }
        </div>
    )
}

export default ProjectSkills
