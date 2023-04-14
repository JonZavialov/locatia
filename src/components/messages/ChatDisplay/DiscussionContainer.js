import Discussion from "./Discussion";
import ChatBar from "./ChatBar";
import DiscussionHeader from "./DiscussionHeader";
import { useRef } from "react";
import { useEffect } from "react";

function DiscussionContainer({ chatInfo, userInfo }){
    const discussionContainer = useRef(null)

    useEffect(() => {
        if(discussionContainer.current)
            discussionContainer.current.scrollTop = discussionContainer.current.scrollHeight;
    }, [])

    return (
        <>
            <DiscussionHeader userInfo={userInfo} />
            <div id="discussion-container" ref={discussionContainer}>
                <Discussion chatInfo={chatInfo} />
            </div>  
            <ChatBar chatInfo={chatInfo} />
        </>
    )
}

export default DiscussionContainer;