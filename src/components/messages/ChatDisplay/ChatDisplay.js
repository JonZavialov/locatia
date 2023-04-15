import DiscussionContainer from "./DiscussionContainer";

function ChatDisplay({ userInfo, cid }){    
    return(
        <div id="chat-display">
            {!cid && <p id="select-chat-filler">Select a chat to view messages</p>}
            {cid && <DiscussionContainer userInfo={userInfo} cid={cid} />}
        </div>
    )
}

export default ChatDisplay;