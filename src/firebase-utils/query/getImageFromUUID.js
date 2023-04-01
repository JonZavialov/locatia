import getImageFromStorage from "./getImageFromStorage";

function getImageFromUUID(uuid){
    return getImageFromStorage(`user/${uuid}.png`)
}

export default getImageFromUUID;