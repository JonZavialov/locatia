import { ref, child, get } from "firebase/database";
import { db } from '../initApp';
import createNotification from '../../utils/createNotification';

function getProfiles(){
    return new Promise((resolve, reject) => {
        const dbRef = ref(db);

        get(child(dbRef, '/accounts')).then((snapshot) => {
            if (snapshot.exists()) {
                resolve(snapshot.val());
            } else {
                reject("No data available");
                // TODO: handle error
            }
        }).catch(() => {
            createNotification('error', 'Error getting profiles!');
        });
    })
}

export default getProfiles