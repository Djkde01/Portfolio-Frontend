import React from 'react'

import '../styles/Header.css'
import logo from '../assets/media/LogoVectorWhite.svg';

const Header = () => {
    return (
        <header className="header">
            <span className="header-logo">
                <img src={logo} alt="Djkde Logo"/>
            </span>
            <nav>
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Content</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
