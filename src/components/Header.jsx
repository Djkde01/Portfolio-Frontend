import React, {useState} from 'react'

import '../styles/Header.css'
import logo from '../assets/media/LogoVectorWhite.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    const [click, setClick] = useState(false);

    const handleClick = () =>{
        setClick(!click);
    }

    const closeMobileMenu = () =>{
        setClick(false);
    }

    return (
        <header className="header">
            <Link to="/" className="header-logo">
                <img src={logo} alt="Djkde Logo"/>
            </Link>            
            <nav>
                <ul className={click ? "header-menu--list active" : "header-menu--list"}>
                    <li className="header-menu--item">
                        <Link to="/about" onClick={closeMobileMenu}>About</Link>
                    </li>
                    <li className="header-menu--item">
                        <Link to="/">Content</Link>
                    </li>
                    <li className="header-menu--item">
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className="header-menu--item">
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            <div className={click ? "pencet Diam" : "pencet"} onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            </nav>
        </header>
    )
}

export default Header
