import { ref, onValue } from "firebase/database";
import { db } from "../initApp";

function getAvailabilityInfo(UUID){
    return new Promise((resolve) => {
        const availRef = ref(db, 'availability/' + UUID);
        onValue(availRef, (snapshot) => {
            resolve(snapshot.val())
        });
    })
}

export default getAvailabilityInfo