import React from 'react'
import Skill from './Skill'

import icon from '../assets/media/atomo.svg';

import '../styles/SkillsList.css';

const SkillsList = ({skills}) => {
    return (
        <div className="skills-list">
        {
            skills.map((skill)=>(
                <Skill key={skill._id} skillIcon={skill.image} skillName={skill.name} type="big"/>
            ))
        }
        </div>
    )
}

export default SkillsList
