import MessagesNavigatorChat from "./MessagesNavigatorChat.js"

function MessagesNavigatorChatsContainer({ chats, onClick }){
    return (
        chats.map((chat) => {
            return (
                <MessagesNavigatorChat cid={chat} key={chat} onClick={onClick} />
            )
        })
    )
}

export default MessagesNavigatorChatsContainer