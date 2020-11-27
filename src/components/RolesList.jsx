import React from 'react'

import RoleCard from './RoleCard';

import icon from '../assets/media/atomo.svg';
import '../styles/RolesList.css';

const RolesList = () => {
    return (
        <div className="roles-list">
            <RoleCard roleImage={icon} roleName="Front-end Developer" roleDescription="Short description about that technology and my projects"/>
            <RoleCard roleImage={icon} roleName="Front-end Developer" roleDescription="Short description about that technology and my projects"/>
            <RoleCard roleImage={icon} roleName="Front-end Developer" roleDescription="Short description about that technology and my projects"/>
        </div>
    )
}

export default RolesList
