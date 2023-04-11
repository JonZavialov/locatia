import MessagesNavigator from "./MessagesNavigator";
import ChatDisplay from "./ChatDisplay";
import getCurrentUser from "../../utils/getCurrentUser";

function Messages(){    
    return (
        <>
            <MessagesNavigator uid={getCurrentUser().uid} />
            <ChatDisplay cid='test cid' />
        </>
    )
}

export default Messages;