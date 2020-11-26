import React from 'react'

import '../styles/RoleCard.css';

const RoleCard = ({roleImage, roleName, roleDescription}) => {
    return (
        <div className="rolecard">
            <span className="rolecard-image">
                <img scr={roleImage} alt="Technology icon"/>
            </span>
            <div className="rolecard-description">
                <h5>
                    {roleName}
                </h5>
                <p>
                    {roleDescription}
                </p>
            </div>
        </div>
    )
}

export default RoleCard
