import { ref, set } from "firebase/database";
import { db } from "../initApp";
import { v4 } from 'uuid';
import getCurrentUser from "../../utils/getCurrentUser";
import createNotification from "../../utils/createNotification";

function sendChat(textRef, chatInfo, cid){
    const msg = textRef.value;
    if (msg.trim() === "") return;

    set(ref(db, `chats/${cid}/messages/${chatInfo.messages.length}`), {
        messageID: v4(),
        msg,
        sender: getCurrentUser().uid,
        timestamp: Math.floor(Date.now() / 1000)
    })
    .then(() => {
        textRef.value = "";
    })
    .catch(() => {
        createNotification("Error", "An error occurred while sending your message. Please try again later.")
    })
}

export default sendChat