import ContactForm from '../components/ContactForm'
import Footer from "../components/Footer"
import Navbar from "../components/NavBar"
import MediaQuery from 'react-responsive'
const ContactPage = () => {
    return(
        <main id="wrap">
            <MediaQuery minWidth={1000}>
                <Navbar/>
            </MediaQuery>
            <ContactForm/>
            <Footer/>
        </main>
    )
}
export default ContactPage