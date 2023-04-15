import IndividualMessage from "./IndividualMessage";

function Discussion({ chatInfo, onLoad }){        
    onLoad();

    if(!chatInfo.messages) return <p id="start-chat">Start a chat</p>
    
    return (
        chatInfo.messages.map((message) => {
            return (
                <IndividualMessage messageInfo={message} key={message.messageID} />
            )
        })
    )
}

export default Discussion;