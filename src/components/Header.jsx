import React from 'react'

import '../styles/Header.css'
import logo from '../assets/media/LogoVectorWhite.svg';

const Header = () => {
    return (
        <header className="header">
            <span className="header-logo">
                <img src={logo} alt="Djkde Logo"/>
            </span>
            <nav className="header-menu">
                <ul className="header-menu--list">
                    <li className="header-menu--item"><a href="/">About</a></li>
                    <li className="header-menu--item"><a href="/">Content</a></li>
                    <li className="header-menu--item"><a href="/">Projects</a></li>
                    <li className="header-menu--item"><a href="/">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
