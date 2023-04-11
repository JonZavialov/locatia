import NavBar from "../navBar/NavBar";
import Menu from "../menu/Menu";
import Messages from "./Messages";
import './messages.css';
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
        </>
    )
}

export default MessagesContainer;