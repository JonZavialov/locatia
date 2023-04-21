import { ref, child, get } from "firebase/database";
import { db } from '../initApp';

function getChatsFromUID(uid){
    return new Promise((resolve, reject) => {
        const dbRef = ref(db);
       
        get(child(dbRef, '/chat ids/' + uid)).then((snapshot) => {
            if (snapshot.exists()) {
                resolve(snapshot.val());
            }else resolve([])
        }).catch(() => {
            reject()
        });
    })
}

export default getChatsFromUID