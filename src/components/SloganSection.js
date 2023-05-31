import React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "../styles/SloganSection.scss"

const SloganSection = () => {
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const slogans = document.querySelectorAll('#slogans > article')
        slogans.forEach( (el, i) => {
            gsap.fromTo(el.children, {y: '+=120', opacity: 0},{y: 0, opacity: 1, duration: 2,
                scrollTrigger: {trigger: '#slogan'+(i+1), start: '10% top'}}
            )
        })
    },[])


    return(
        <section id="slogans">

            <article id="slogan1" data-number=' 1'>
                <header>Revolution</header>
                <p>This app was created using the latest medical research. Unique features will help you achieve your goals in a fun and enjoyable way.</p>
            </article>
            {/* <StaticImage style={{position: 'absolute', top: '150vh',left: '50%', opacity: 0.8}} src="../images/nature.jpg" alt='nature photo' placeholder="blurred"  layout="fixed" width={600}/> */}
            <article id="slogan2" data-number='2'>
                <p>This app was created using the latest medical research. Unique features will help you achieve your goals in a fun and enjoyable way.</p>
                <header>Totally free</header>
            </article>
            <article id="slogan3" data-number='3'>
                <header>Comfort</header>
                <p>This app was created using the latest medical research. Unique features will help you achieve your goals in a fun and enjoyable way.</p>
            </article>
        </section>
    )
}
export default SloganSection