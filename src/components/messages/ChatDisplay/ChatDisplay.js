import DiscussionContainer from "./DiscussionContainer";

function ChatDisplay({ chatInfo, userInfo }){    
    return(
        <div id="chat-display">
            {!chatInfo && <p id="select-chat-filler">Select a chat to view messages</p>}
            {chatInfo && <DiscussionContainer chatInfo={chatInfo} userInfo={userInfo} />}
        </div>
    )
}

export default ChatDisplay;