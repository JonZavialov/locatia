import MessagesNavigatorChat from "./MessagesNavigatorChat.js"

function MessagesNavigatorChatsContainer({ chats }){
    return (
        chats.map((chat) => {
            return (
                <MessagesNavigatorChat cid={chat} key={chat} />
            )
        })
    )
}

export default MessagesNavigatorChatsContainer