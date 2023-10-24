import { ref, child, get } from "firebase/database";
import { db } from '../initApp';
import createNotification from '../../utils/createNotification';

function getBlogs(){
    return new Promise((resolve, reject) => {
        const dbRef = ref(db);

        // I need to know where the blogs will be stored (I assumed it will be in a node/db called blogs)
        // What does snapshot mean?
        get(child(dbRef, '/blogs')).then((snapshot) => {
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

export default getBlogs