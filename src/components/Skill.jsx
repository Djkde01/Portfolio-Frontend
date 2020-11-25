import React from 'react'

import '../styles/Skill.css'

const Skill = ({skillIcon, skillName}) => {
    console.log(skillIcon);
    return (
        <div className="skill-container">
            <span className="skill-icon">
                <img scr={skillIcon} alt="Skill icon"/>
            </span>
            <h6 className="skill-name">{skillName}</h6>
        </div>
    )
}

export default Skill
