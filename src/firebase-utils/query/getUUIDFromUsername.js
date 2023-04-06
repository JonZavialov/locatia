import { ref, onValue} from "firebase/database";
import { db } from "../initApp";

function getUUIDFromUsername(username) {
    return new Promise((resolve) => {
        const uuidRef = ref(db, 'usernames/' + username);
        onValue(uuidRef, (snapshot) => {
            resolve(snapshot.val())
        });
    })
}

export default getUUIDFromUsername