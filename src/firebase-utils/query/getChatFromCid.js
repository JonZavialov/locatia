import { ref, child, get } from "firebase/database";
import { db } from '../initApp';

function getChatFromCid(cid){
    return new Promise((resolve, reject) => {
        const dbRef = ref(db);

        get(child(dbRef, '/chats/' + cid)).then((snapshot) => {
            if (snapshot.exists()) {
                resolve(snapshot.val());
            }
        }).catch(() => {
            reject()
        });
    })
}

export default getChatFromCid;