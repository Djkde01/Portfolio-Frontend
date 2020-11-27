import React from 'react'
import Skill from './Skill'

import icon from '../assets/media/atomo.svg';

import '../styles/SkillsList.css';

const SkillsList = () => {
    return (
        <div className="skills-list">
            <Skill skillIcon={icon} skillName="React.js" type="big"/>
            <Skill skillIcon={icon} skillName="React.js" type="big"/>
            <Skill skillIcon={icon} skillName="React.js" type="big"/>
            <Skill skillIcon={icon} skillName="React.js" type="big"/>
            <Skill skillIcon={icon} skillName="React.js" type="big"/>
            <Skill skillIcon={icon} skillName="React.js" type="big"/>
            <Skill skillIcon={icon} skillName="React.js" type="big"/>
            <Skill skillIcon={icon} skillName="React.js" type="big"/>
            <Skill skillIcon={icon} skillName="React.js" type="big"/>
            <Skill skillIcon={icon} skillName="React.js" type="big"/>
            <Skill skillIcon={icon} skillName="React.js" type="big"/>
            <Skill skillIcon={icon} skillName="React.js" type="big"/>
            <Skill skillIcon={icon} skillName="React.js" type="big"/>
            <Skill skillIcon={icon} skillName="React.js" type="big"/>
        </div>
    )
}

export default SkillsList
