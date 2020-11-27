import React from 'react'

import '../styles/Skill.css'

const Skill = ({skillIcon, skillName, type}) => {
    if (type==="big"){
        return (
            <div className="skill-container-big">
                <span className="skill-icon-big">
                    <img className="skill-icon-image-big" src={skillIcon} alt="Skill icon"/>
                </span>
                <h6 className="skill-name-big">{skillName}</h6>
            </div>
        )
    }
    else{
        return (
            <div className="skill-container-small">
                <span className="skill-icon-small">
                    <img className="skill-icon-image-small" src={skillIcon} alt="Skill icon"/>
                </span>
                <p className="skill-name-small">{skillName}</p>
            </div>
        )
    }
}

export default Skill
