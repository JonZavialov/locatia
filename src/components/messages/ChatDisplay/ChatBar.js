import { useRef } from "react";
import sendChat from "../../../firebase-utils/post/sendChat";

function ChatBar({ chatInfo, cid }){
    const textRef = useRef();
    
    return (
        <div id="chat-bar">
            <textarea placeholder="Type a message..." ref={textRef} onKeyDown={(e) => {
                if (e.key === "Enter") {
                    sendChat(textRef.current, chatInfo, cid);
                    e.preventDefault();
                }
            }}/>
            <button onClick={() => sendChat(textRef.current, chatInfo, cid)} >
                SEND
            </button>
        </div>
    )
}

export default ChatBar;