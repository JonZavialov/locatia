import { ref, onValue } from "firebase/database";
import { db } from "../initApp";

function getProfileFromUUID(UUID){
    return new Promise((resolve) => {
        const profileRef = ref(db, 'accounts/' + UUID);
        onValue(profileRef, (snapshot) => {
            resolve({
                profile: snapshot.val(),
                UUID
            })
        });
    })
}

export default getProfileFromUUID