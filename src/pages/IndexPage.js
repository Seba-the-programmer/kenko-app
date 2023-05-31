import React from "react"
import MediaQuery from 'react-responsive'
import Mobile from "../components/Mobile"
import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import SloganSection from "../components/SloganSection"
import Features from "../components/Features"
import Footer from "../components/Footer"

class IndexPage extends React.Component {
    render() {
        return(
<>
    <MediaQuery maxWidth={800}>
      <Mobile />
    </MediaQuery>

    <MediaQuery minWidth={800}>
      <main id="wrap">
        <NavBar />
        <Hero />
        <SloganSection/>
        <Features />
        <Footer />
      </main>
    </MediaQuery>
  </>
        )
    }
}
export default IndexPage
