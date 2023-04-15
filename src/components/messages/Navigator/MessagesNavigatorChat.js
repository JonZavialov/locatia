import { useState, useEffect } from 'react';
import getChatFromCid from '../../../firebase-utils/query/getChatFromCid';
import IndividualChatDisplay from './IndividualChatDisplay';

function MessagesNavigatorChat({ cid, onClick }){
    const [chatInfo, setChatInfo] = useState(false);

    useEffect(() => {
        getChatFromCid(cid).then((chatInfo) => {
            setChatInfo(chatInfo);
        }).catch(() => {
            setChatInfo(false);
        })
    }, [cid])
    
    return(
        <div className="chat-selector">
            {chatInfo ? <IndividualChatDisplay chatInfo={chatInfo} onClick={onClick} cid={cid} /> : 'Loading...'}
        </div>
    )
}

export default MessagesNavigatorChat