import React from 'react'

import Header from '../components/Header';
import Button from '../components/Button';

import '../styles/Landing.css';

const Landing = () => {
    return (
        <div>
            <Header/>
            <main className="main-landing">
            <h1>Let’s create something together!</h1>
            <Button text="Know my work" link="/about" type="principal" color="alternative"/>
            </main>
        </div>
    )
}

export default Landing
