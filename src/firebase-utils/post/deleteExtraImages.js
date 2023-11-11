import { storage, auth } from "../initApp";
import { ref, listAll, deleteObject } from "firebase/storage";

function deleteExtraImages(imagesLength) {
    return new Promise((resolve) => {
        const storageRef = ref(storage, `/users/${auth.currentUser.uid}`);
        listAll(storageRef)
        .then((res) => {
            res.items.forEach((itemRef, i) => {
                if (i >= imagesLength) deleteObject(itemRef);
                if (i === res.items.length - 1) resolve()
            });
        });
    })
}

export default deleteExtraImages