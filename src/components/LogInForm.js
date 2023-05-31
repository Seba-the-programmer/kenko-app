import React from 'react'
import {Link} from "react-router-dom"
import '../styles/LogInForm.scss'

const LogInForm = () => {
    return (
        <div className='form__wrap'>
            <div id="back"><Link to="/">{"<"}Go back</Link></div>
            <section className="form">
                <header className="form__item__heading">Log in to Kenko</header>

                <div className="form__item">
                    <input type="text" placeholder="Username" className="form__item__user" />
                </div>
                <div className="form__item">
                    <input type="password" placeholder="Password" className="form__item__pass" />
                </div>
                <div className="form__item">
                    <button className="form__item__btn">Log in</button>
                </div>
            </section>
        </div>
    )
}

export default LogInForm