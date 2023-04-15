import { useEffect, useState, useRef } from "react";
import getChatsFromUID from "../../../firebase-utils/query/getChatsFromUID";
import  MessagesNavigatorChats  from "./MessagesNavigatorChatsContainer";
import MessagesNavigatorSearch from "./MessageNavigatorSearch";

function MessagesNavigator({ uid, onClick }){
    const [chats, setChats] = useState([]);
    const [displayState, setDisplayState] = useState('chat');
    const searchButtonRef = useRef();

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
                <button 
                    ref={searchButtonRef}
                    className={displayState === 'chat' ? '' : 'selected'} 
                    onClick={() => {
                        if(searchButtonRef.current.classList.contains('selected'))
                            setDisplayState('chat')
                        else setDisplayState('search')
                    }}
                >+</button>
            </div>
            {displayState === 'chat' && <MessagesNavigatorChats chats={chats} onClick={onClick} />}
            {displayState === 'search' && <MessagesNavigatorSearch onSelect={(info) => {
                onClick(info)
                setDisplayState('chat')
            }} />}
        </div>
    )
}

export default MessagesNavigator