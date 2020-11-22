import React from 'react'

import '../styles/Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>©{currentYear} - Sergio Estrella</p>
            <p>Made with <span role="img" aria-label="love">❤</span> in Colombia</p>
        </footer>
    )
}

export default Footer
