import React from 'react'

import '../styles/Button.css';

const Button = ({text, link}) => {
    return (
        <button className="button" type="button"><a href={link}>{text}</a></button>
    )
}

export default Button
