import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import NotFound from "../components/NotFound"


class NotFoundPage extends React.Component {
    render() {
        return(
<main id="wrap">
        <NavBar/>
        <NotFound/>
        <Footer/>
    </main>
        )
    }
}
export default NotFoundPage