import { ref, set } from "firebase/database";
import { db } from "../initApp";
import { v4 } from 'uuid';
import createNotification from "../../utils/createNotification";
import getChatsFromUID from "../query/getChatsFromUID";

function createNewChat(ownUUID, otherUUID){
    return new Promise(async(resolve) => { 
        const userChats = await getChatsFromUID(ownUUID);
        // TODO: check that the chat doesn't already exist

        const cid = v4()
        set(ref(db, `chat ids/${ownUUID}/${userChats.length}`), cid)
        .then(() => {
            set(ref(db, `chats/${cid}/`), {
                users: [ownUUID, otherUUID]
            })
            resolve(cid)
        })
        .catch(() => {
            createNotification("Error", "An error occurred finding that user. Please try again later.")
        })
    })  
}

export default createNewChat
