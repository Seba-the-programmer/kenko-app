import React from 'react'
import '../styles/Footer.scss'
import MediaQuery from 'react-responsive'

const Footer = () => {
    return (
        <footer id="footer">
            <div id="footer__main">
            <MediaQuery minWidth={850}>
            <div id="footer__main__heading">
                    <div>
                        <header>KENKO</header>
                        Take care of your live
                    </div>

                </div>
            </MediaQuery>

                <section id="footer__main__links">
                    <a href='/Contact'>Contact us</a>
                    <a href='/jobs'>Apply for a job</a>
                    <a href='/signup'>Sign up</a>
                    <a href='/login'>Log in</a>
                    <a href='/privacy'>Privacy policy</a>
                </section>
            </div>
            <section id="footer__copy">
                © All rights reserved Autor: Sebastian Krzyżak
            </section>
        </footer>
    )
}

export default Footer