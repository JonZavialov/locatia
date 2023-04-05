import getProfiles from "./getProfiles";

function getProfileFromUser(user) {
    return new Promise((resolve, reject) => {
        getProfiles()
        .then((profiles) => {
            Object.keys(profiles).forEach(uuid => {
                if (profiles[uuid].username === user) resolve({
                    profile: profiles[uuid], 
                    uuid
                });
            });

            reject()
        })
    })
}

export default getProfileFromUser;