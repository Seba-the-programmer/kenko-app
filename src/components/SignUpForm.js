import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/SignUpForm.scss'

const SignUpForm = () => {
    return (
        <div className='form__wrap'>
            <div id="back"><Link to="/">{"<"}Go back</Link></div>
            <section className="form">
                <header className="form__item__heading">Sign up to Kenko</header>

                <div className="form__item">
                    <input type="text" placeholder="Username" className="form__item__user" />
                </div>
                <div className="form__item">
                    <input type="password" placeholder="Password" className="form__item__pass" />
                </div>
                <div className="form__item">
                    <input type="password" placeholder="Repeat password" className="form__item__pass" />
                </div>
                <div className="form__item">
                    <input type="email" placeholder="Email" className="form__item__user" />
                </div>
                <div className='form__item form__item--check'>
                    <input type='checkbox' id="terms"/>
                    <label htmlFor='terms'>Accept terms of use</label>
                </div>
                <div className="form__item">
                    <button className="form__item__btn">Sign up</button>
                </div>
            </section>
        </div>
    )
}

export default SignUpForm