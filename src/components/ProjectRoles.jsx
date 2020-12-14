import React from 'react'

import Button from './Button'
import '../styles/ProjectRoles.css';

const ProjectRoles = ({roles}) => {
    return (
        <span className="project-roles">
        {
            roles.map((role)=>(
                <Button type="second" color="alternative" text={role}/>
            ))
        }
        </span>
    )
}

export default ProjectRoles
