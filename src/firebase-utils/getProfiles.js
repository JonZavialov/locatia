import { ref, child, get } from "firebase/database";
import { db } from './initApp';

function getProfiles(){
    return new Promise((resolve, reject) => {
        const dbRef = ref(db);

        get(child(dbRef, '/')).then((snapshot) => {
            if (snapshot.exists()) {
                resolve(snapshot.val());
            } else {
                reject("No data available");
                // TODO: handle error
            }
        }).catch((error) => {
            console.error(error);
            // TODO: handle error
        });
    })
}

export default getProfiles