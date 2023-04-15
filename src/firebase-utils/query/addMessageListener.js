import { ref, onValue} from "firebase/database";
import { db } from "../initApp";

function addMessageListener(listener, cid){
    const chatRef = ref(db, 'chats/' + cid);
    onValue(chatRef, (snapshot) => {
        const data = snapshot.val();
        listener(data)
    });
}

export default addMessageListener