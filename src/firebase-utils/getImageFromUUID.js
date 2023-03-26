import { ref, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase-utils/initApp';

function getImageFromUUID(uuid){
    return new Promise((resolve, reject) => {
        getDownloadURL(ref(storage, uuid + '.png'))
        .then((url) => {
            resolve(url);
        })
        .catch((error) => {
            reject(error);
            // TODO: handle error
        });
    })
}

export default getImageFromUUID;