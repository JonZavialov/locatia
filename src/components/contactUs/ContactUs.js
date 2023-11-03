import { useEffect, useRef, useState } from "react";
import CopyrightFooter from "../footer/Footer";
import NavBar from "../navBar/NavBar";
import "./contact-us.css";

function ContactUs(){
    const messageBox = useRef(null);
    const [isReportingUser, setReporting] = useState(false);
    
    useEffect(() => {
        const report = new URLSearchParams(window.location.search).get('report');
        if (report){
            setReporting(true);
            messageBox.current.value = `I am reporting ${new URLSearchParams(window.location.search).get('report')} because `
        } 
    }, [])
    
    function submitForm(e){
        e.preventDefault();
        // TODO: link with backend
        // Make sure all fields are filled out
        // If it is a report, append something to the beginning
    }
    
    return(
        <>
            <NavBar />
            <div id="contact-us-container">
                <div>
                    <h1>
                        {
                            isReportingUser
                            ? 'Report User'
                            : 'Get In Touch'
                        }
                    </h1>
                    <form>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Your Name" />
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Your Email" />
                        <label htmlFor="message">Message</label>
                        {
                            isReportingUser && (
                                <p id="user-report-info">Please elaborate on why you are reporting this user</p>
                            )
                        }
                        <textarea name="message" id="message" placeholder="Your Message" ref={messageBox}></textarea>
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