import React from 'react'

import RoleCard from './RoleCard';

import '../styles/RolesList.css';

const RolesList = ({roles}) => {
    return (
        <div className="roles-list">
        {
            roles.map((role)=>(
                <RoleCard key={role._id} roleImage={role.icon} roleName={role.name} roleDescription={role.description}/>
            ))
        }
        </div>
    )
}

export default RolesList
