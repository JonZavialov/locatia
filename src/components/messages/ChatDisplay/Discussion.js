import IndividualMessage from "./IndividualMessage";

function Discussion({ chatInfo }){
    return (
        chatInfo.messages.map((message) => {
            return (
                <IndividualMessage messageInfo={message} key={message.messageID} />
            )
        })
    )
}

export default Discussion;