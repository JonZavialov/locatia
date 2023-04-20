import { ref, child, get } from "firebase/database";
import { db } from '../initApp';

function usernameExists(username){
    return new Promise((resolve, reject) => {
        const dbRef = ref(db);

        get(child(dbRef, '/usernames/' + username)).then((snapshot) => {
            if (snapshot.exists()) {
                resolve(snapshot.val());
            }else{
                reject()
            }
        })
    })
}

export default usernameExists