import getAgeFromTimestamp from "../../../utils/getAgeFromTimestamp"
import getCurrentUser from "../../../utils/getCurrentUser"

function IndividualMessage({ messageInfo }){
    const self = getCurrentUser().uid

    return (
        <div className={"message " + (messageInfo.sender === self ? 'right': "left")}>
            <p className="content">{messageInfo.msg}</p>
            <p className="timestamp">{getAgeFromTimestamp(messageInfo.timestamp)}</p>
        </div>
    )
}

export default IndividualMessage