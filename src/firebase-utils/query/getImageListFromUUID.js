import { ref, listAll } from "firebase/storage";
import { storage } from "../initApp";

function getImageListFromUUID(uuid){    
    return new Promise((resolve, reject) => {
        // Create a reference under which you want to list
        const listRef = ref(storage, 'users/' + uuid);
        // Find all the prefixes and items.
        listAll(listRef)
        .then((res) => {
            resolve(res.items)
        }).catch((error) => {
            // TODO: handle error
            reject(error)
        });
    })
}

export default getImageListFromUUID