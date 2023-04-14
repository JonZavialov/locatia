function ChatBar({ chatInfo }){
    return (
        <div id="chat-bar">
            <textarea placeholder="Type a message..." />
            <button>
                SEND
            </button>
        </div>
    )
}

export default ChatBar;