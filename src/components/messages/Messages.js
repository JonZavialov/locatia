import MessagesNavigator from "./Navigator/MessagesNavigator";
import ChatDisplay from "./ChatDisplay";
import getCurrentUser from "../../utils/getCurrentUser";
import { useState } from "react";

function Messages(){    
    const [cid] = useState(false); // eventually use a callback from messages nav to set this
    
    return (
        <div id="chat-container">
            <MessagesNavigator uid={getCurrentUser().uid} />
            <ChatDisplay cid={cid} />
        </div>
    )
}

export default Messages;