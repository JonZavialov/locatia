import CopyrightFooter from "../footer/Footer";
import NavBar from "../navBar/NavBar";
import "./contact-us.css";

function ContactUs(){
    function submitForm(e){
        e.preventDefault();
        // TODO: link with backend
    }
    
    return(
        <>
            <NavBar />
            <div id="contact-us-container">
                <div>
                    <h1>Get In Touch</h1>
                    <form>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Your Name" />
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Your Email" />
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" placeholder="Your Message"></textarea>
                        <button onClick={(e) => submitForm(e)}>Send Message</button>
                    </form>
                </div>
                <img src={process.env.PUBLIC_URL + '/assets/support.svg'} alt="support"/>
            </div>
            <CopyrightFooter />
        </>
    )
}

export default ContactUs;