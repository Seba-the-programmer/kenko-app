import React from "react"
import "../styles/Hero.scss"

const Hero = () => {
    return (
        <div id='hero'>
            <div style={{marginTop: '-40px'}} id="phone"><img src={require('../images/phone.png')} alt='phone' width={280}/></div>
            <article>
                <header>IMPROVE YOUR <span style={{color: '#00753C'}}>LIFE</span> QUALITY NOW</header>
                <p>
                    We have changed the lives of over 100,000 people.
                    Say goodbye to bad habits and hello to a healthier, happier you!
                </p>
                <img src={require('../images/review.png')} alt='review' width='620'/>
                <div style={{marginTop: '20px', display: 'flex'}}>
                    <a href='https://www.apple.com/pl/app-store/'><img src={require('../images/apple.png')} alt='Download' width={200} /></a>
                    <a href='https://play.google.com/store/games?pli=1'><img src={require('../images/store.png')} alt='Download' width={200} /></a>
                </div>
            </article>
        </div>
    )
}

export default Hero