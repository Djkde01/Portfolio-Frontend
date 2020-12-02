import React from 'react'

import Logo from '../assets/media/LogoVectorWhite.svg';
import '../styles/Transition.css';

const Transition = ({position}) => {
    return (
        <div className={`transition-page ${position}`}>
            <span className="transition-page--icon">
                <img src={Logo} alt="Transition logo"/>
            </span>
        </div>
    )
}

export default Transition
