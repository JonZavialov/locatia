import { db } from "../initApp";
import { ref, get, child } from "firebase/database";

function getUserFromUUID(UUID){
    return new Promise((resolve, reject) => {
        const dbRef = ref(db);

        get(child(dbRef, '/usernames')).then((snapshot) => {
            if (snapshot.exists()) {
                const object = snapshot.val();
                resolve(Object.keys(object).find(key => object[key] === UUID));
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

export default getUserFromUUID