import { getDownloadURL } from "firebase/storage";

function getImageFromRef(ref){
    return new Promise((resolve, reject) => {
        getDownloadURL(ref)
        .then((url) => {
            resolve(url);
        })
        .catch((error) => {
            reject(error);
            // TODO: handle error
        });
    })
}

export default getImageFromRef;