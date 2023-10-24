import createNotification from "../../utils/createNotification";
import { db } from "../initApp";
import { ref, get, child } from "firebase/database";

function getBlogFromBID(BID){
    return new Promise((resolve, reject) => {
        const dbRef = ref(db);
        
        // TODO: Need to know how the database looks like to be able to get the Blogs
        get(child(dbRef, '/blogs')).then((snapshot) => {
            if (snapshot.exists()) {
                const object = snapshot.val();
                resolve(Object.keys(object).find(key => object[key] === BID));
            } else {
                reject("No data available");
                // TODO: handle error
            }
        }).catch(() => {
            createNotification('error', 'Error getting user!')
        });
    })
}

export default getBlogFromBID