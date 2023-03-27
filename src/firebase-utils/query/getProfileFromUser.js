import getProfiles from "./getProfiles";

function getProfileFromUser(user) {
    return new Promise((resolve, reject) => {
        getProfiles()
        .then((profiles) => {
            profiles.forEach(profile => {
                if (profile.username === user) resolve(profile);
            });

            reject()
        })
    })
}

export default getProfileFromUser;