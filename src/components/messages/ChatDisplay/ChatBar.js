import getImageFromStorage from "../../../firebase-utils/query/getImageFromStorage";
import { useState, useEffect } from "react";

function ChatBar({ chatInfo }){
    const [sendIcon, setSendIcon] = useState(false);

    useEffect(() => {
        getImageFromStorage('/assets/send.png').then((sendIcon) => {
            setSendIcon(sendIcon);
        })
    }, [])

    return (
        <div id="chat-bar">
            <textarea placeholder="Type a message..." />
            <button>
                {sendIcon && <img src={sendIcon} alt="send" />}
            </button>
        </div>
    )
}

export default ChatBar;