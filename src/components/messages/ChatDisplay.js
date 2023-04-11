function ChatDisplay({ cid }){
    return(
        <div id="chat-display">
            {cid ? null : <p id="select-chat-filler">Select a chat to view messages</p>}
        </div>
    )
}

export default ChatDisplay;