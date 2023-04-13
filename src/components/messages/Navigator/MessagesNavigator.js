import { useEffect, useState } from "react";
import getChatsFromUID from "../../../firebase-utils/query/getChatsFromUID";
import  MessagesNavigatorChats  from "./MessagesNavigatorChatsContainer";

function MessagesNavigator({ uid }){
    const [chats, setChats] = useState([]);

    useEffect(() => {
        getChatsFromUID(uid).then((chats) => {
            setChats(chats);
        }).catch(() => {
            setChats(false)
        })
    }, [uid])
    
    return (
        <div id="chat-nav">
            <div id="chat-nav-header">
                <h1>Messages</h1>
            </div>
            {chats ? <MessagesNavigatorChats chats={chats} />: 'No chats available!'}
        </div>
    )
}

export default MessagesNavigator