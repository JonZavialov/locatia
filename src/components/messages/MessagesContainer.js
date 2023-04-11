import NavBar from "../navBar/NavBar";
import Menu from "../menu/Menu";
import Messages from "./Messages";
import './messages.css';

function MessagesContainer(){
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