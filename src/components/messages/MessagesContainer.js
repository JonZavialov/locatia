import NavBar from "../navBar/NavBar";
import Menu from "../menu/Menu";
import CopyrightFooter from "../footer/Footer";
import Messages from "./Messages";
import './messages.css';
import './Navigator/navigator.css'
import './ChatDisplay/chatDisplay.css'
import getCurrentUser from "../../utils/getCurrentUser";

function MessagesContainer(){
    if(!getCurrentUser()) window.location.href = '/login';
    
    return (
        <>
            <NavBar />
            <div id="messages-container">
                <Menu/>
                <Messages />
            </div>
            <CopyrightFooter />
        </>
    )
}

export default MessagesContainer;