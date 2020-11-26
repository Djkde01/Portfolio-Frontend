import React from 'react'

import '../styles/Skill.css'

const Skill = ({skillIcon, skillName}) => {
    return (
        <div className="skill-container">
            <span className="skill-icon">
                <img className="skill-icon-image" src={skillIcon} alt="Skill icon"/>
            </span>
            <h6 className="skill-name">{skillName}</h6>
        </div>
    )
}

export default Skill
