
import getUUIDFromUsername from "./getUUIDFromUsername";
import getProfileFromUUID from "./getProfileFromUUID";

async function getProfileFromUser(user) {
    return new Promise((resolve) => {
        getUUIDFromUsername(user)
        .then((UUID) => {
            getProfileFromUUID(UUID)
            .then((profile) => {
                resolve(profile);
            })
        })
    })
}

export default getProfileFromUser;