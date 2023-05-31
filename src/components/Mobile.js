import React from "react"
import '../styles/Mobile.scss'
import {Link} from "react-router-dom"
const Mobile = () => {
    return (
        <main id="mobile">
            <img src={require("../images/logo.png")} alt="logo" width={170}/>
            <header>KENKO CARE</header>
            <q>Create healthy habits, not restrictions.</q>
            <Link to="/signup"><div className="mobbtn mobbtn--green">Start now for free</div></Link>
            <div className="sep">OR</div>
            <Link to="/login"><div className="mobbtn mobbtn--trans">Log in to Kenko</div></Link>
        </main>
    )
}

export default Mobile