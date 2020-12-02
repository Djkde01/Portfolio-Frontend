import React from 'react'

import Header from '../components/Header';
import Button from '../components/Button';

import '../styles/Landing.css';

const Landing = () => {
    return (
        <div>
            <Header/>
            <main className="main-landing">
            <h1>Hi! I’m Sergio Estrella!</h1>
            <h4>I build digital products, using web technologies</h4>
            <Button text="Know my work" link="/about" type="principal" color="alternative"/>
            </main>
        </div>
    )
}

export default Landing
