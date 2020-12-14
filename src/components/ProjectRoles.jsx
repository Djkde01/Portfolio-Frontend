import React from 'react'

import Button from './Button'
import '../styles/ProjectRoles.css';

const ProjectRoles = ({roles}) => {
    return (
        <span className="project-roles">
        {
            roles.map((role,index)=>(
                <Button key={index} type="second" color="alternative" text={role}/>
            ))
        }
        </span>
    )
}

export default ProjectRoles
