import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

import '../styles/Contact.css'
import data from '../data';

const Contact = () => {
    const icons = data.contactLinks;
    return (
        <div>
            <Header/>
            <main className="main-contact">
                <h1>Lets talk!</h1>
                <div className="contact-info">
                    <div className="contact-info-message">
                        <p>
                        An idea? An offer? A question? Just a greeting? We can talk about it!
                        </p>
                        <p>
                        I’d love to meet up with you to discuss your venture and potential collaborations.
                        </p>
                    </div>
                        <h1>You can find me on</h1>
                    <div className="contact-info-links">
                        {
                            icons.map((icon)=>(
                                <a key={icon._id} className="contact-info-links-element" href={icon.link}>
                                    <img src={icon.icon} alt={icon.name}/>
                                </a>
                            ))
                        }

                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Contact
