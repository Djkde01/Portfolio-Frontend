import React from 'react'
import Skill from './Skill'

import icon from '../assets/media/atomo.svg';

import '../styles/SkillsList.css';

const SkillsList = () => {
    return (
        <div className="skills-list">
            <Skill skillIcon={icon} skillName="React.js"/>
            <Skill skillIcon={icon} skillName="React.js"/>
            <Skill skillIcon={icon} skillName="React.js"/>
            <Skill skillIcon={icon} skillName="React.js"/>
            <Skill skillIcon={icon} skillName="React.js"/>
            <Skill skillIcon={icon} skillName="React.js"/>
            <Skill skillIcon={icon} skillName="React.js"/>
            <Skill skillIcon={icon} skillName="React.js"/>
            <Skill skillIcon={icon} skillName="React.js"/>
            <Skill skillIcon={icon} skillName="React.js"/>
            <Skill skillIcon={icon} skillName="React.js"/>
            <Skill skillIcon={icon} skillName="React.js"/>
            <Skill skillIcon={icon} skillName="React.js"/>
            <Skill skillIcon={icon} skillName="React.js"/>
        </div>
    )
}

export default SkillsList
