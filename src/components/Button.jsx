import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/Button.css';

const Button = ({text, link, type, color}) => {
    const typeOfButton = type==="principal" ? "first" : "second";
    if(link!=null)
    {
        return(
            <Link className={`button ${typeOfButton}-${color}`} to={link}>
                {text}
            </Link>
        )
    }
    else{
        return (
            <button className={`button  ${typeOfButton}-${color}`} type="button">{text}</button>
            )
        }
}

export default Button
