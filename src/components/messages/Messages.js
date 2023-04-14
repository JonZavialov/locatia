import MessagesNavigator from "./Navigator/MessagesNavigator";
import ChatDisplay from "./ChatDisplay/ChatDisplay";
import getCurrentUser from "../../utils/getCurrentUser";
import { useState } from "react";

function Messages(){    
    const [chatInfo, setChatInfo] = useState(false);
    const [userInfo, setUserInfo] = useState(false);

    return (
        <div id="chat-container">
            <MessagesNavigator uid={getCurrentUser().uid} onClick={(info) => {
                setChatInfo(info.chat);
                setUserInfo(info.user);
            }} />
            <ChatDisplay chatInfo={chatInfo} userInfo={userInfo} />
        </div>
    )
}

export default Messages;