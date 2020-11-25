import React from 'react'

import '../styles/Header.css'
import logo from '../assets/media/LogoVectorWhite.svg';

const Header = () => {
    return (
        <header className="header">
            <span className="header-logo">
                <a href="/"><img src={logo} alt="Djkde Logo"/></a>
            </span>
            <nav className="header-menu">
                <ul className="header-menu--list">
                    <li className="header-menu--item"><a href="/about">About</a></li>
                    <li className="header-menu--item"><a href="/">Content</a></li>
                    <li className="header-menu--item"><a href="/">Projects</a></li>
                    <li className="header-menu--item"><a href="/">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
