import React from 'react'
import {Link} from "react-router-dom"
import '../styles/ContactForm.scss'

const ContactForm = () => {
    return (
        <div className='form__wrap'>
            <div id="back"><Link to="/">{"<"}Go back</Link></div>
            <section className="form">
                <header className="form__item__heading">Get in touch</header>

                <div className="form__item">
                    <input type="email" placeholder="Email" className="form__item__user" />
                </div>
                <div className="form__item">
                    <input type="text" placeholder="Title" className="form__item__user" />
                </div>
                <textarea cols={60} rows={20} placeholder='Start typing your message...'/>
                <div className="form__item">
                    <button className="form__item__btn">Send</button>
                </div>
            </section>
        </div>
    )
}

export default ContactForm