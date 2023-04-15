import MessagesNavigator from "./Navigator/MessagesNavigator";
import ChatDisplay from "./ChatDisplay/ChatDisplay";
import getCurrentUser from "../../utils/getCurrentUser";
import { useState } from "react";

function Messages(){    
    const [userInfo, setUserInfo] = useState(false);
    const [cid, setCid] = useState(false);

    return (
        <div id="chat-container">
            <MessagesNavigator uid={getCurrentUser().uid} onClick={(info) => {
                setUserInfo(info.user);
                setCid(info.cid)
            }} />
            <ChatDisplay userInfo={userInfo} cid={cid} />
        </div>
    )
}

export default Messages;