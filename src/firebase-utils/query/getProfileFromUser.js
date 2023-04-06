
import getUUIDFromUsername from "./getUUIDFromUsername";
import { ref, onValue } from "firebase/database";
import { db } from "../initApp";

async function getProfileFromUser(user) {
    return new Promise((resolve) => {
        getUUIDFromUsername(user)
        .then((UUID) => {
            const profileRef = ref(db, 'accounts/' + UUID);
            onValue(profileRef, (snapshot) => {
                resolve({
                    profile: snapshot.val(),
                    UUID
                })
            });
        })
    })
}

export default getProfileFromUser;