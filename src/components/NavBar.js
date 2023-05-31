import React from "react"
import { Link, useLocation } from "react-router-dom"
import "../styles/NavBar.scss"

const NavBar = () => {
    let prevScrollpos = window.scrollY
    window.onscroll = function() {
        let currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
          try {
            document.getElementById("navbar").style.top = "0"
          } catch (error) {

          }
        } else {
            try {
                document.getElementById("navbar").style.top = "-100px"
              } catch (error) {

              }
        }
        prevScrollpos = currentScrollPos
    }

    const links = [
        ['Home', '/', false],
        ['Contact', '/contact', false],
        ['Jobs', '/jobs', false],
    ]
    switch (useLocation().pathname) {
        case '/':
            links[0][2] = true
            break;
        case '/contact':
            links[1][2] = true
            break;
        case '/jobs':
            links[2][2] = true
            break;
        default:
            break;
    }
    const renderedLinks = links.map((l, i) => {
        return <Link to={l[1]} className={`navlink ${l[2] ? 'navlink--active' : ''}`} key={i}>{l[0]}</Link>
    })
    return (
        <nav id='navbar'>
            <Link to="/"><img src={require("../images/navlogo.png")} alt="logo" width={170} /></Link>
            <div className='vertical-container'>
                {renderedLinks}
                <Link to="/signup"><div className='btn' style={{background: '#00753C',color: 'white', marginRight: '10px'}}>Sign up now</div></Link>
                <Link to="/login"><div className='btn' style={{background: 'white',color: 'black'}}>Log in</div></Link>
            </div>
        </nav>
    )
}

export default NavBar