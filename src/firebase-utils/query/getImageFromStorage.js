import { ref, getDownloadURL } from "firebase/storage";
import { storage } from '../initApp';

function getImageFromStorage(path){
    return new Promise((resolve, reject) => {
        getDownloadURL(ref(storage, path))
        .then((url) => {
            resolve(url);
        })
        .catch((error) => {
            reject(error);
            // TODO: handle error
        });
    })
}

export default getImageFromStorage;