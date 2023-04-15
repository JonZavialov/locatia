import Discussion from "./Discussion";
import ChatBar from "./ChatBar";
import DiscussionHeader from "./DiscussionHeader";
import { useRef } from "react";
import { useEffect, useState } from "react";
import addMessageListener from "../../../firebase-utils/query/addMessageListener";

function DiscussionContainer({ userInfo, cid }){
    const discussionContainer = useRef(null)
    const [chatInfo, setChatInfo] = useState(false);

    useEffect(() => {
        addMessageListener((data) => {
            setChatInfo(data)
        }, cid)
    }, [cid])

    return (
        <>
            <DiscussionHeader userInfo={userInfo} />
            <div id="discussion-container" ref={discussionContainer}>
                {chatInfo && <Discussion chatInfo={chatInfo} onLoad={() => {
                    // TODO: FIX THIS
                    setTimeout(() => {
                        if(discussionContainer.current)
                            discussionContainer.current.scrollTop = discussionContainer.current.scrollHeight;
                    }, 100)
                }} />}
            </div>  
            <ChatBar chatInfo={chatInfo} cid={cid} />
        </>
    )
}

export default DiscussionContainer;